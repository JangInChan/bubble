import apiClient from "./api-client";

/**
 * 리뷰 API
 * 일반 사용자 리뷰 관련 API
 */

/**
 * GET /api/reviews/drinks/{drinkId}
 * 술에 대한 리뷰 불러오기
 * 술 상세페이지에서 리뷰를 불러옵니다.
 * @param drinkId - 술 ID
 * @returns 리뷰 목록
 */
export const getDrinkReviews = (drinkId: number) => {
  return apiClient.get(`/reviews/drinks/${drinkId}`);
};

/**
 * GET /api/reviews/drinks/{drinkId}/scores
 * 술에 대한 별점 가져오기
 * 술 상세페이지에 보여질 별점을 가져옵니다.
 * @param drinkId - 술 ID
 * @returns 별점 정보
 */
export const getDrinkScores = (drinkId: number) => {
  return apiClient.get(`/reviews/drinks/${drinkId}/scores`);
};

/**
 * GET /api/reviews/my
 * 유저에 대한 리뷰 불러오기
 * 유저에 대한 모든 리뷰를 불러옵니다.
 * @returns 유저 리뷰 목록
 */
export const getMyReviews = () => {
  return apiClient.get("/reviews/my");
};

/**
 * POST /api/reviews/orders/{orderId}
 * 리뷰 작성
 * 리뷰 작성입니다. 검증내용 : 유저ID검증, 술ID검증, 리뷰검증, 유저의 주문 목록 검증, 주문에서 해당 술 샀는지 검증
 * @param orderId - 주문 ID
 * @param drinkId - 술 ID
 * @param content - 리뷰 내용
 * @param score - 별점
 * @returns 리뷰 작성 결과
 */
export const createReview = (
  orderId: number,
  drinkId: number,
  content: string,
  score: number
) => {
  return apiClient.post(`/reviews/orders/${orderId}?drinkId=${drinkId}`, {
    content,
    score,
  });
};
