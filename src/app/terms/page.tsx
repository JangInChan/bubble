import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-main mb-8">(주)기주 이용약관</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제1조 (목적)</h2>
            <p className="text-gray-700 leading-relaxed">
              이 약관은 (주)기주(이하 "회사")가 운영하는 온라인 쇼핑몰 "기주"(https://giju.vercel.app/, 이하 "사이트")에서 제공하는 인터넷 관련 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제2조 (정의)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            </p>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p><strong>1. "사이트"</strong>란 회사가 상품 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이트를 운영하는 사업자의 의미로도 사용합니다.</p>
              <p><strong>2. "이용자"</strong>란 사이트에 접속하여 이 약관에 따라 사이트가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
              <p><strong>3. "회원"</strong>이란 사이트에 회원등록을 한 자로서, 계속적으로 사이트가 제공하는 서비스를 이용할 수 있는 자를 말합니다.</p>
              <p><strong>4. "비회원"</strong>이란 회원에 가입하지 않고 사이트가 제공하는 서비스를 이용하는 자를 말합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제3조 (약관의 명시와 설명 및 개정)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보보호책임자 등을 이용자가 쉽게 알 수 있도록 사이트의 초기 서비스화면에 게시합니다.</p>
              <p>2. 회사는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.</p>
              <p>3. 회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제4조 (서비스의 제공 및 변경)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div>
                <p className="mb-2">1. 회사는 다음과 같은 업무를 수행합니다.</p>
                <ul className="pl-4 space-y-1">
                  <li>- 전통주 및 관련 상품의 판매</li>
                  <li>- 상품 정보 제공 및 구매계약의 체결</li>
                  <li>- 구매계약이 체결된 상품의 배송</li>
                  <li>- 기타 회사가 정하는 업무</li>
                </ul>
              </div>
              <p>2. 회사는 상품의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 상품의 내용을 변경할 수 있습니다. 이 경우에는 변경된 상품의 내용 및 제공일자를 명시하여 현재의 상품의 내용을 게시한 곳에 즉시 공지합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제5조 (서비스의 중단)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
              <p>2. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제6조 (회원가입)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</p>
              <div>
                <p className="mb-2">2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>
                <ul className="pl-4 space-y-1">
                  <li>- 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>- 등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>- 만 19세 미만인 경우 (주류 판매 특성상)</li>
                  <li>- 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </div>
              <p>3. 회원가입계약의 성립 시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제7조 (회원 탈퇴 및 자격 상실 등)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</p>
              <div>
                <p className="mb-2">2. 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.</p>
                <ul className="pl-4 space-y-1">
                  <li>- 가입 신청 시에 허위 내용을 등록한 경우</li>
                  <li>- 다른 사람의 사이트 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                  <li>- 사이트를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제8조 (회원에 대한 통지)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 회사가 회원에 대한 통지를 하는 경우, 회원이 회사와 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.</p>
              <p>2. 회사는 불특정다수 회원에 대한 통지의 경우 1주일이상 사이트 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제9조 (구매신청 및 개인정보 제공 동의 등)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div>
                <p className="mb-2">1. 사이트 이용자는 사이트상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, 회사는 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.</p>
                <ul className="pl-4 space-y-1">
                  <li>- 상품 등의 검색 및 선택</li>
                  <li>- 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력</li>
                  <li>- 약관내용, 청약철회권이 제한되는 서비스, 배송료, 설치비 등의 비용부담과 관련한 내용에 대한 확인</li>
                  <li>- 이 약관에 동의하고 위 내용을 확인하거나 거부하는 표시</li>
                  <li>- 상품 등의 구매신청 및 이에 관한 확인 또는 회사의 확인에 대한 동의</li>
                  <li>- 결제방법의 선택</li>
                </ul>
              </div>
              <p>2. 회사가 제3자에게 구매자 개인정보를 제공할 필요가 있는 경우 실제 구매신청 시에 구매자의 동의를 받아야 하며, 회원가입 시 미리 포괄적으로 동의를 받지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제10조 (계약의 성립)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <div>
                <p className="mb-2">1. 회사는 제9조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다.</p>
                <ul className="pl-4 space-y-1">
                  <li>- 신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>- 미성년자가 주류 등 「청소년보호법」에서 금지하는 재화 및 용역을 구매하는 경우</li>
                  <li>- 기타 구매신청에 승낙하는 것이 회사 기술상 현저히 지장이 있다고 판단하는 경우</li>
                </ul>
              </div>
              <p>2. 회사의 승낙이 제12조 제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제11조 (지급방법)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              사이트에서 구매한 상품에 대한 대금지급방법은 다음 각 호의 방법중 가용한 방법으로 할 수 있습니다.
            </p>
            <ul className="text-gray-700 space-y-1 pl-4">
              <li>1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체</li>
              <li>2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제</li>
              <li>3. 온라인무통장입금</li>
              <li>4. 전자화폐에 의한 결제</li>
              <li>5. 수령 시 대금지급</li>
              <li>6. 마일리지 등 회사가 지급한 포인트에 의한 결제</li>
              <li>7. 회사와 계약을 맺었거나 회사가 인정한 상품권에 의한 결제</li>
              <li>8. 기타 전자적 지급 방법에 의한 대금 지급 등</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제15조 (청약철회 등)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 회사와 상품구매계약을 체결한 이용자는 「전자상거래 등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약내용에 관한 서면을 받은 날(그 서면을 받은 때보다 상품 등의 공급이 늦게 이루어진 경우에는 상품 등을 공급받거나 상품 등의 공급이 시작된 날을 말합니다)부터 7일 이내에는 청약을 철회할 수 있습니다.</p>
              <div>
                <p className="mb-2">2. 이용자는 상품 등을 배송 받은 경우 다음 각 호의 1에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.</p>
                <ul className="pl-4 space-y-1">
                  <li>- 이용자에게 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우</li>
                  <li>- 이용자의 사용 또는 일부 소비에 의하여 상품 등의 가치가 현저히 감소한 경우</li>
                  <li>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우</li>
                  <li>- 같은 성능을 지닌 상품 등으로 복제가 가능한 경우 그 원본인 상품 등의 포장을 훼손한 경우</li>
                  <li className="font-semibold">- 주류의 경우 「주세법」 등 관련 법령에 따라 반품이 제한되는 경우</li>
                </ul>
              </div>
              <p>3. 제2항 제2호 내지 제4호의 경우에 회사가 사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제20조 (이용자의 의무)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              이용자는 다음 행위를 하여서는 안 됩니다.
            </p>
            <ul className="text-gray-700 space-y-1 pl-4">
              <li>1. 신청 또는 변경시 허위 내용의 등록</li>
              <li>2. 타인의 정보 도용</li>
              <li>3. 회사에 게시된 정보의 변경</li>
              <li>4. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>5. 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>6. 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 사이트에 공개 또는 게시하는 행위</li>
              <li className="font-semibold">8. 미성년자에게 주류를 판매하거나 구매를 알선하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">제24조 (재판권 및 준거법)</h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p>1. 회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</p>
              <p>2. 회사와 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="font-semibold text-gray-800 text-lg mb-2">부칙</p>
                <p className="text-gray-700"><strong>제1조 (시행일)</strong> 이 약관은 2025년 6월 6일부터 시행합니다.</p>
              </div>
              
              <div className="bg-main text-white p-6 rounded-lg">
                <p className="font-bold text-lg mb-3">(주)기주</p>
                <div className="space-y-1 text-sm">
                  <p>* 주소: 광주 동구 수기동 22-3</p>
                  <p>* 대표이사: 최종빈</p>
                  <p>* 전화번호: 010-9485-6730</p>
                  <p>* 이메일: bubblegiju@gmail.com</p>
                  <p>* 사업자등록번호: [사업자등록번호]</p>
                  <p>* 통신판매업신고번호: [통신판매업신고번호]</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}