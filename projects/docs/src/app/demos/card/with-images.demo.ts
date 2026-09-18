import { Component } from '@angular/core';

import {
  AvAvatarImports,
  AvButtonComponent,
  AvCardImports,
  AvCloseButtonComponent,
  AvLinkImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

const DEMO_TEMPLATE = `<div class="flex w-full items-center justify-center">
      <div class="grid w-full max-w-2xl grid-cols-12 gap-4 p-4">
        <div av-card class="col-span-12 flex h-auto min-h-[152px] flex-col sm:flex-row">
          <div
            class="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]"
          >
            <img
              alt="Yellow pears"
              class="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
              loading="lazy"
              src="/images/food/food-yellow-pears-pair.png"
            />
          </div>
          <div class="flex flex-1 flex-col gap-3">
            <div av-card-header class="gap-1">
              <h3 av-card-title class="pr-8">Become an ACME Creator!</h3>
              <p av-card-description>
                Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                faucibus etiam.
              </p>
              <button
                av-close-button
                aria-label="Close banner"
                class="absolute top-3 right-3"
              ></button>
            </div>
            <div
              av-card-footer
              class="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div class="flex flex-col">
                <span class="text-sm font-medium text-foreground">Only 10 spots</span>
                <span class="text-xs text-muted">Submission ends Oct 10.</span>
              </div>
              <button av-button class="w-full sm:w-auto">Apply Now</button>
            </div>
          </div>
        </div>

        <div class="col-span-12 grid grid-cols-12 gap-4">
          <div class="col-span-12 grid grid-cols-12 gap-4 lg:col-span-6">
            <div av-card class="col-span-12">
              <div class="absolute top-3 right-3 z-10">
                <button av-close-button aria-label="Close notification"></button>
              </div>
              <div av-card-header class="flex-row items-start gap-3">
                <span role="img" aria-label="Dollar sign icon" class="shrink-0">
                  <app-icon icon="solar:dollar-linear" size="32" class="text-accent" />
                </span>
                <div class="flex flex-col gap-1">
                  <span class="text-xs font-medium text-muted uppercase">PAYMENT</span>
                  <h3 av-card-title class="pr-8 text-sm sm:text-base">
                    You can now withdraw on crypto
                  </h3>
                  <p av-card-description class="text-xs sm:text-sm">
                    Add your wallet in settings to withdraw
                  </p>
                </div>
              </div>
              <div av-card-footer>
                <a av-link aria-label="Go to settings" href="#" rel="noopener noreferrer">
                  Go to settings
                  <span av-link-icon></span>
                </a>
              </div>
            </div>

            <div class="col-span-12 grid grid-cols-12 gap-4">
              <div av-card class="col-span-12 gap-2 sm:col-span-6">
                <div av-card-header>
                  <span av-avatar class="size-[56px] rounded-xl">
                    <img
                      av-avatar-image
                      alt="Indie Hackers"
                      src="/images/objects/object-yellow-mushroom-lamp.png"
                    />
                    <span av-avatar-fallback>JK</span>
                  </span>
                </div>
                <div av-card-content class="mt-1">
                  <p class="text-sm leading-4 font-medium">Indie Hackers</p>
                  <p class="text-xs text-muted">148 members</p>
                </div>
                <div av-card-footer class="flex items-center gap-2">
                  <span av-avatar class="size-4">
                    <img
                      av-avatar-image
                      alt="John"
                      src="/images/gradients/gradient-pink-magenta.png"
                    />
                    <span av-avatar-fallback>JK</span>
                  </span>
                  <p class="text-xs text-muted">By John</p>
                </div>
              </div>

              <div av-card class="col-span-12 gap-2 sm:col-span-6">
                <div av-card-header>
                  <span av-avatar class="size-[56px] rounded-xl">
                    <img
                      av-avatar-image
                      alt="AI Builders"
                      src="/images/avatars/avatar-woman-orange-jacket.png"
                    />
                    <span av-avatar-fallback>AB</span>
                  </span>
                </div>
                <div av-card-content class="mt-1">
                  <p class="text-sm leading-4 font-medium">AI Builders</p>
                  <p class="text-xs text-muted">362 members</p>
                </div>
                <div av-card-footer class="flex items-center gap-2">
                  <span av-avatar class="size-4">
                    <img
                      av-avatar-image
                      alt="John"
                      src="/images/gradients/gradient-blue-cyan.png"
                    />
                    <span av-avatar-fallback>M</span>
                  </span>
                  <p class="text-xs text-muted">By Martha</p>
                </div>
              </div>
            </div>
          </div>

          <div
            av-card
            class="col-span-12 min-h-[200px] overflow-hidden rounded-3xl lg:col-span-6"
          >
            <img
              alt="NEO Home Robot"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full object-cover"
              src="/images/characters/character-robot-rear-gold-slit.png"
            />
            <div av-card-header class="z-10 text-white">
              <h3 av-card-title class="text-xs font-semibold tracking-wide text-black/70">NEO</h3>
              <p av-card-description class="text-sm leading-5 font-medium text-black/50">
                Home Robot
              </p>
            </div>
            <div av-card-footer class="z-10 mt-auto flex items-center justify-between">
              <div>
                <div class="text-sm font-medium text-black">Available soon</div>
                <div class="text-xs text-black/60">Get notified</div>
              </div>
              <button av-button class="bg-white text-black" size="sm" variant="tertiary">
                Notify me
              </button>
            </div>
          </div>
        </div>

        <div class="col-span-12 grid grid-cols-12 gap-4">
          <div
            av-card
            class="relative col-span-12 h-[250px] sm:h-[300px] md:col-span-8 md:h-[350px]"
          >
            <img
              alt="NEO Home Robot"
              aria-hidden="true"
              class="absolute inset-0 h-full w-full object-cover"
              src="/images/characters/character-robot-front-eyes.png"
            />
            <div av-card-footer class="z-10 mt-auto flex items-end justify-between">
              <div>
                <div class="text-base font-medium text-black sm:text-lg">NEO</div>
                <div class="text-xs font-medium text-black/50 sm:text-sm">$499/m</div>
              </div>
              <button av-button class="bg-white text-black" size="sm" variant="tertiary">
                Get now
              </button>
            </div>
          </div>

          <div
            class="col-span-12 flex flex-col gap-2 md:col-span-4 md:justify-between md:gap-0 md:py-2"
          >
            <div av-card class="flex flex-row gap-3 p-1" variant="transparent">
              <img
                alt="Astronaut"
                class="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
                loading="lazy"
                src="/images/characters/character-astronaut-white-suit.png"
              />
              <div class="flex flex-1 flex-col justify-center gap-1">
                <h3 av-card-title class="text-sm">Bridging the Future</h3>
                <p av-card-description class="text-xs">Today, 6:30 PM</p>
              </div>
            </div>
            <div av-card class="flex flex-row gap-3 p-1" variant="transparent">
              <img
                alt="Peaches on ice"
                class="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
                loading="lazy"
                src="/images/food/food-peaches-ice-blue.png"
              />
              <div class="flex flex-1 flex-col justify-center gap-1">
                <h3 av-card-title class="text-sm">Avocado Hackathon</h3>
                <p av-card-description class="text-xs">Wed, 4:30 PM</p>
              </div>
            </div>
            <div av-card class="flex flex-row gap-3 p-1" variant="transparent">
              <img
                alt="Blood orange"
                class="aspect-square h-16 w-16 shrink-0 rounded-xl object-cover select-none sm:h-20 sm:w-20"
                loading="lazy"
                src="/images/food/food-blood-orange-half.png"
              />
              <div class="flex flex-1 flex-col justify-center gap-1">
                <h3 av-card-title class="text-sm">Sound Electro | Beyond art</h3>
                <p av-card-description class="text-xs">Fri, 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

export const DEMO_NAME = 'card-with-images';
export const DEMO_LANG = 'typescript';
export const DEMO_SOURCE = `import { Component } from '@angular/core';
import {
  AvAvatarImports,
  AvButtonComponent,
  AvCardImports,
  AvCloseButtonComponent,
  AvLinkImports,
} from '@avesra/angular';

import { AppIconComponent } from '../../components/app-icon/app-icon.component';

@Component({
  selector: 'app-card-with-images-demo',
  imports: [
    AvCardImports,
    AvButtonComponent,
    AvCloseButtonComponent,
    AvLinkImports,
    AvAvatarImports,
    AppIconComponent,
  ],
  template: \`${DEMO_TEMPLATE}\`,
})
export class CardWithImagesDemo {}`;

@Component({
  selector: 'app-card-with-images-demo',
  imports: [
    AvCardImports,
    AvButtonComponent,
    AvCloseButtonComponent,
    AvLinkImports,
    AvAvatarImports,
    AppIconComponent,
  ],
  template: DEMO_TEMPLATE,
})
export class CardWithImagesDemo {}
