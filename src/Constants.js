export const MESSAGE = {
  GET_DATE_INPUT: `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)`,
  GET_MENU_INPUT: `주문하실 메뉴를 메뉴와 개수를 알려 주세요.`,
};

export const DATE = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 31,
  DEFAULT_MONTH: 12,
};

export const PRICE = {
  FREE_GIFT_THRESHOLD: 120000,
  FREE_GIFT_AMOUNT: 25000,
};

export const ERROR = {
  PREFIX: "[ERROR]",
  DATE_NOT_A_NUMBER: `유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  EXCEED_DATE_LIMIT: `유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  EXCEED_MONEY_LIMIT: `유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  ORDER_NOT_A_FORM: `유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  ORDER_NOT_ON_THE_MENU: `유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  DUPLICATE_MENU: `유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  ORDER_QUANTITY: `유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  UNDER_ORDER_LIMIT: `10,000원 이상 주문해주세요. 다시 입력해 주세요.`,
  TOTAL_QUANTITY_TOO_HIGH: `총 20개이하만 주문가능합니다. 다시 입력해 주세요.`,
  QUANTITY_NOT_A_NUMBER: `유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  ORDER_IS_BEVERAGES_ONLY: `음료만 주문하실 수 없습니다. 다시 입력해 주세요.`,
};
