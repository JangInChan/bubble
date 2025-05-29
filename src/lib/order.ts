import apiClient from "./api-client";

/**
 * 주문 생성 응답 타입
 */
export interface OrderResponse {
  orderId: string;
  amount: number;
  orderName: string;
  customerEmail: string;
  customerName: string;
  successUrl: string;
  failUrl: string;
}

/**
 * 주문 생성 (order, orderDetail 생성 및 결제 연동 정보 반환)
 * @param cartItemIds 주문할 장바구니 아이템 ID 배열
 * @returns {Promise<OrderResponse>} 주문 및 결제 정보 (orderId, amount, orderName 등)
 * @example
 * const result = await createOrder([1, 2, 3]);
 */
export async function createOrder(
  cartItemIds: number[]
): Promise<OrderResponse> {
  try {
    const response = await apiClient.post<{
      success: boolean;
      message: string;
      data: OrderResponse;
      timestamp: string;
      status: string;
    }>("/api/order", {
      cartItemIds,
    });
    return response.data.data;
  } catch (error: any) {
    console.error("[Order] 주문 생성 실패:", {
      error,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
    });
    throw error;
  }
}

/**
 * 주문 이력 조회 (사용자의 전체 주문 내역)
 * @returns {Promise<any>} 주문 이력 배열
 * @example
 * const history = await getOrderHistory();
 */
export async function getOrderHistory() {
  const response = await apiClient.get("/api/order/history");
  return response.data;
}

/**
 * 환불 요청 (주문 내 특정 상품 환불)
 * @param orderId 주문 ID
 * @param orderDetailId 환불 요청할 orderDetailId 배열
 * @returns {Promise<any>} 환불 요청 결과
 * @example
 * await requestRefund(123, [456, 789]);
 */
export async function requestRefund(orderId: number, orderDetailId: number[]) {
  const response = await apiClient.post("/api/order/refund/request", {
    orderId,
    orderDetailId,
  });
  return response.data;
}
