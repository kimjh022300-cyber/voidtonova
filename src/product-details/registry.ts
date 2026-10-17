import type { ComponentType } from "react";
import VoidLaptopFixedV2Page from "./void-laptop-fixed-v2";
import VoidLaptopPortableV2Page from "./void-laptop-portable-v2";
import VoidLaptopSwivelV2Page from "./void-laptop-swivel-v2";
import VoidMagsafePhoneV2Page from "./void-magsafe-phone-v2";
import VoidMagsafeRingPremiumPage from "./void-magsafe-ring-premium";
import VoidBookStandPage from "./void-book-stand";
import VoidBlackWalnutKeyboardPalmRestPage from "./void-black-walnut-keyboard-palm-rest";
import VoidBlackWalnutMousePalmRestPage from "./void-black-walnut-mouse-palm-rest";
import VoidBlackWalnutPalmRestSetPage from "./void-black-walnut-palm-rest-set";
import VoidWalnutTodoPage from "./void-walnut-todo";
import VoidHeadphoneStandPage from "./void-headphone-stand";
import Void360PhoneStandPage from "./void-360-phone-stand";
import VoidLaptopStandSleevePage from "./void-laptop-stand-sleeve";
import VoidTabletStandV2Page from "./void-tablet-stand-v2";
import NovaPushupPadPage from "./nova-pushup-pad";
import NovaPressureStepperPage from "./nova-pressure-stepper";
import NovaPushupBarPage from "./nova-pushup-bar";
import NovaAbSlidePage from "./nova-ab-slide";
import NovaQuickGripPage from "./nova-quick-grip";
import NovaWirelessBattleRopePage from "./nova-wireless-battle-rope";
import NovaMassageBallSetPage from "./nova-massage-ball-set";

/** 만든 상세페이지 등록표. 새 상품 만들면 여기에 한 줄 추가 */
export const PRODUCT_DETAIL_PAGES: Record<string, ComponentType> = {
  "void-portable-laptop-stand": VoidLaptopPortableV2Page,
  "void-fixed-laptop-stand": VoidLaptopFixedV2Page,
  "void-360-laptop-stand": VoidLaptopSwivelV2Page,
  "void-magnetic-phone-stand": VoidMagsafePhoneV2Page,
  "void-magsafe-ring-premium": VoidMagsafeRingPremiumPage,
  "void-book-stand": VoidBookStandPage,
  "void-black-walnut-keyboard-palm-rest": VoidBlackWalnutKeyboardPalmRestPage,
  "void-black-walnut-mouse-palm-rest": VoidBlackWalnutMousePalmRestPage,
  "void-black-walnut-palm-rest-set": VoidBlackWalnutPalmRestSetPage,
  "void-walnut-todo": VoidWalnutTodoPage,
  "void-headphone-stand": VoidHeadphoneStandPage,
  "void-360-phone-stand": Void360PhoneStandPage,
  "void-laptop-stand-sleeve": VoidLaptopStandSleevePage,
  "void-tablet-floor-stand": VoidTabletStandV2Page,
  "nova-pushup-pads": NovaPushupPadPage,
  "nova-air-acupressure-stepper": NovaPressureStepperPage,
  "nova-quick-grip": NovaQuickGripPage,
  "nova-wireless-battle-rope": NovaWirelessBattleRopePage,
  "nova-premium-metal-pushup-bars": NovaPushupBarPage,
  "nova-quiet-ab-slide": NovaAbSlidePage,
  "nova-massage-ball-set": NovaMassageBallSetPage,
};

export function isProductDetailAvailable(productId: string) {
  return productId in PRODUCT_DETAIL_PAGES;
}
