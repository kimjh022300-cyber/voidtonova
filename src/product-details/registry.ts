import type { ComponentType } from "react";
import NovaAbSlidePage from "./nova-ab-slide";
import NovaPressureStepperPage from "./nova-pressure-stepper";
import NovaQuickGripPage from "./nova-quick-grip";
import NovaPushupBarPage from "./nova-pushup-bar";
import NovaPushupPadPage from "./nova-pushup-pad";
import NovaWirelessBattleRopePage from "./nova-wireless-battle-rope";
import VoidLaptopFixedV2Page from "./void-laptop-fixed-v2";
import VoidLaptopPortableV2Page from "./void-laptop-portable-v2";
import VoidLaptopSwivelV2Page from "./void-laptop-swivel-v2";
import VoidMagsafePhoneV2Page from "./void-magsafe-phone-v2";
import VoidMagsafeRingPremiumPage from "./void-magsafe-ring-premium";
import VoidTabletStandV2Page from "./void-tablet-stand-v2";

export const PRODUCT_DETAIL_PAGES: Record<string, ComponentType> = {
  "nova-pushup-pads": NovaPushupPadPage,
  "nova-quick-grip": NovaQuickGripPage,
  "nova-wireless-battle-rope": NovaWirelessBattleRopePage,
  "nova-quiet-ab-slide": NovaAbSlidePage,
  "nova-premium-metal-pushup-bars": NovaPushupBarPage,
  "nova-air-acupressure-stepper": NovaPressureStepperPage,
  "void-portable-laptop-stand": VoidLaptopPortableV2Page,
  "void-fixed-laptop-stand": VoidLaptopFixedV2Page,
  "void-360-laptop-stand": VoidLaptopSwivelV2Page,
  "void-magnetic-phone-stand": VoidMagsafePhoneV2Page,
  "void-magsafe-ring-premium": VoidMagsafeRingPremiumPage,
  "void-tablet-floor-stand": VoidTabletStandV2Page,
};

export function isProductDetailAvailable(productId: string) {
  return productId in PRODUCT_DETAIL_PAGES;
}
