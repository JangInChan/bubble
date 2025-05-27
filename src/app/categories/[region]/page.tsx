const regions = {
  seoul: { name: "서울", description: "서울 지역의 전통주" },
  gyeonggi: { name: "경기도", description: "경기도 지역의 전통주" },
  gangwon: { name: "강원도", description: "강원도 지역의 전통주" },
  chungbuk: { name: "충청북도", description: "충청북도 지역의 전통주" },
  chungnam: { name: "충청남도", description: "충청남도 지역의 전통주" },
  jeonbuk: { name: "전라북도", description: "전라북도 지역의 전통주" },
  jeonnam: { name: "전라남도", description: "전라남도 지역의 전통주" },
  gyeongbuk: { name: "경상북도", description: "경상북도 지역의 전통주" },
  gyeongnam: { name: "경상남도", description: "경상남도 지역의 전통주" },
  jeju: { name: "제주도", description: "제주도 지역의 전통주" },
};

export default async function RegionPage({ params }: { params: any }) {
  const { region } = params;

  if (!regions[region as keyof typeof regions]) {
    return <div>존재하지 않는 지역입니다.</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            {regions[region as keyof typeof regions].name} 전통주
          </h1>
          <p className="text-muted-foreground mt-2">
            {regions[region as keyof typeof regions].description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={`/placeholder.svg?height=192&width=384&text=${
                    regions[region as keyof typeof regions].name
                  } 전통주 ${item}`}
                  alt={`$${
                    regions[region as keyof typeof regions].name
                  } 전통주 ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">
                  {regions[region as keyof typeof regions].name} 전통주 {item}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  종류 | 도수
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold">45,000원</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 text-sm rounded-md transition-colors">
                    장바구니
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
