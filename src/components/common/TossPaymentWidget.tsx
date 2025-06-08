import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";

interface TossPaymentWidgetProps {
  amount: number;
  orderInfo: {
    orderId: string;
    orderName: string;
    customerName: string;
    customerEmail: string;
    successUrl: string;
    failUrl: string;
  };
}

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!;
const customerKey =
  typeof window !== "undefined"
    ? localStorage.getItem("userId") || "guest"
    : "guest";

export default function TossPaymentWidget({
  amount,
  orderInfo,
}: TossPaymentWidgetProps) {
  const paymentWidgetRef = useRef<any>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      if (!clientKey || !customerKey) return;
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      paymentWidgetRef.current = paymentWidget;
      await paymentWidget.renderPaymentMethods("#payment-method", amount);
      await paymentWidget.renderAgreement("#agreement");
      setWidgetLoaded(true);
    })();
  }, [amount]);

  const handlePayment = async () => {
    if (!paymentWidgetRef.current) return;
    setErrorMessage("");
    try {
      await paymentWidgetRef.current.requestPayment({
        orderId: orderInfo.orderId,
        orderName: orderInfo.orderName,
        customerName: orderInfo.customerName,
        customerEmail: orderInfo.customerEmail,
        successUrl: orderInfo.successUrl,
        failUrl: orderInfo.failUrl,
      });
    } catch (e: any) {
      // Toss 위젯 Bridge 에러 및 결제수단 미선택 안내
      if (e?.message?.includes("카드 결제 정보를 선택해주세요")) {
        setErrorMessage("결제수단을 선택한 후 결제하기를 눌러주세요.");
      } else if (e?.message?.includes("Bridge 연결이 끊겼습니다")) {
        setErrorMessage(
          "결제창이 비정상적으로 종료되었습니다. 새로고침 후 다시 시도해 주세요."
        );
      } else {
        setErrorMessage(
          "결제 요청 중 오류가 발생했습니다. 다시 시도해 주세요."
        );
      }
      console.error(e);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: "100%",
        minWidth: 340,
        maxWidth: 420,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
        padding: 32,
      }}
    >
      <div
        id="payment-method"
        style={{ width: "100%", minHeight: 320, marginBottom: 16 }}
      />
      <div id="agreement" style={{ width: "100%", marginBottom: 12 }} />
      {errorMessage && (
        <div className="text-red-500 text-center my-2 text-sm">
          {errorMessage}
        </div>
      )}
      <button
        onClick={handlePayment}
        disabled={!widgetLoaded}
        className="w-[180px] h-[56px] mt-4 text-white rounded flex items-center justify-center hover:opacity-90 transition text-lg font-bold"
        style={{
          backgroundImage: "url('/cart-button.svg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "none",
        }}
      >
        결제하기
      </button>
    </div>
  );
}
