import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-main mb-8">(주)기주 개인정보처리방침</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold text-main mb-4">1. 개인정보의 처리 목적</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>(주)기주</strong>('https://giju.vercel.app/' 이하 '기주') 은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              – 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 전통주 상품 주문 및 배송, 결제 서비스 제공, 고객 상담 및 불만 처리 등
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">2. 개인정보의 처리 및 보유 기간</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ① '기주'는 정보주체로부터 개인정보를 수집할 때 동의 받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              ② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.<br/>
              – 고객 가입 및 관리 : 회원가입을 통한 온라인 쇼핑몰 서비스 이용<br/>
              – 보유 기간 : 회원 탈퇴 시까지 (단, 관계 법령에 따른 보존의무가 있는 경우 해당 기간까지 보존)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              ① 정보주체는 '기주'에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="text-gray-700 space-y-1 pl-4">
              <li>1. 개인정보 열람요구</li>
              <li>2. 오류 등이 있을 경우 정정 요구</li>
              <li>3. 삭제요구</li>
              <li>4. 처리정지 요구</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">4. 처리하는 개인정보의 항목</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ① '기주'는 다음의 개인정보 항목을 처리하고 있습니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              '기주'에서 수집하는 개인정보 항목<br/>
              '기주' 회원 가입 시 제공 동의를 해주시는 개인정보 수집 항목입니다.
            </p>
            <div className="text-gray-700 leading-relaxed mb-3">
              <strong>■ 회원 가입 시</strong><br/>
              – 필수항목 : 닉네임, 이메일, 전화번호, 생일, 출생연도<br/>
              – 선택항목 : 성별<br/>
              – 수집목적 : 기주 회원관리, 전통주 상품 주문 및 배송, 마케팅 이용<br/>
              – 보유기간 : 회원 탈퇴 또는 동의철회 시 지체없이 파기
            </div>
            <p className="text-gray-700 leading-relaxed">
              ② '기주'는 만 19세 미만 고객의 개인정보를 보호하기 위하여 주류 판매 특성상 회원가입은 만19세 이상만 가능하도록 함으로써 미성년자의 개인정보를 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">5. 개인정보의 파기</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              '기주'는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
            </p>
            <div className="text-gray-700 leading-relaxed mb-3">
              <strong>-파기절차</strong><br/>
              이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.
            </div>
            <div className="text-gray-700 leading-relaxed">
              <strong>-파기기한</strong><br/>
              이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ① '기주'는 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(https)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.
            </p>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</p>
              <p>나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구{'>'}인터넷 옵션{'>'}개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.</p>
              <p>다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">7. 개인정보 보호책임자</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ① '기주'는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-800 mb-2">▶ 개인정보 보호책임자</p>
              <div className="text-gray-700 space-y-1">
                <p>* 성명 : 최종빈</p>
                <p>* 직책 : 대표이사</p>
                <p>* 직급 : CEO</p>
                <p>* 연락처 : bubblegiju@gmail.com</p>
                <p className="text-sm">※ 개인정보 보호 담당부서로 연결됩니다.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-800 mb-2">▶ 개인정보 보호 담당부서</p>
              <div className="text-gray-700 space-y-1">
                <p>* 부서명 : 운영팀</p>
                <p>* 담당자 : 김선준</p>
                <p>* 연락처 : bubblegiju@gmail.com</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              ② '기주'의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.<br/>
              '기주'는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">8. 개인정보 처리방침 변경</h2>
            <p className="text-gray-700 leading-relaxed">
              ① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">9. 개인정보의 안전성 확보 조치</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              '기주'는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
            </p>
            <div className="text-gray-700 leading-relaxed space-y-3">
              <p><strong>① 개인정보 취급 직원의 최소화 및 교육</strong><br/>
              개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</p>
              
              <p><strong>② 해킹 등에 대비한 기술적 대책</strong><br/>
              '기주'는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</p>
              
              <p><strong>③ 개인정보의 암호화</strong><br/>
              이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</p>
              
              <p><strong>④ 접속기록의 보관 및 위변조 방지</strong><br/>
              개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.</p>
              
              <p><strong>⑤ 개인정보에 대한 접근 제한</strong><br/>
              개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-main mb-4">10. 정보주체의 권익침해에 대한 구제방법</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              아래의 기관은 (주)기주와는 별개의 기관으로서, '기주'의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
            </p>
            
            <div className="space-y-4 text-gray-700">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)</p>
                <p>– 소관업무 : 개인정보 침해사실 신고, 상담 신청</p>
                <p>– 홈페이지 : privacy.kisa.or.kr</p>
                <p>– 전화 : (국번없이) 118</p>
                <p>– 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">▶ 개인정보 분쟁조정위원회</p>
                <p>– 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</p>
                <p>– 홈페이지 : www.kopico.go.kr</p>
                <p>– 전화 : (국번없이) 1833-6972</p>
                <p>– 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층</p>
              </div>

              <div className="space-y-1">
                <p><strong>▶ 대검찰청 사이버범죄수사단</strong> : 02-3480-3573 (www.spo.go.kr)</p>
                <p><strong>▶ 경찰청 사이버안전국</strong> : 182 (http://cyberbureau.police.go.kr)</p>
              </div>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-lg mb-4">시행일자 : 2025년 6월 6일</p>
              
              <div className="bg-main text-white p-6 rounded-lg">
                <p className="font-bold text-lg mb-3">(주)기주</p>
                <div className="space-y-1 text-sm">
                  <p>* 주소 : 광주 동구 수기동 22-3</p>
                  <p>* 대표이사 : 최종빈</p>
                  <p>* 사업자등록번호 : [사업자등록번호]</p>
                  <p>* 통신판매업신고번호 : [통신판매업신고번호]</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}