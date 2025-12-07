'use client'

import { ComponentPreview } from '@/components/component-preview'
import {
  ArrowButton,
  arrowButtonCode,
  BorderBeamButton,
  borderBeamButtonCode,
  CopyButton,
  copyButtonCode,
  CyberpunkButton,
  cyberpunkButtonCode,
  DeleteButton,
  deleteButtonCode,
  FAB,
  fabCode,
  GlitchTextButton,
  glitchTextButtonCode,
  GlowButton,
  glowButtonCode,
  GooeyButton,
  gooeyButtonCode,
  HoldButton,
  holdButtonCode,
  IconExpandButton,
  iconExpandButtonCode,
  LikeButton,
  likeButtonCode,
  MagneticButton,
  magneticButtonCode,
  NeumorphicButton,
  neumorphicButtonCode,
  NotificationButton,
  notificationButtonCode,
  OutlineFillButton,
  outlineFillButtonCode,
  PixelButton,
  pixelButtonCode,
  Push3DButton,
  push3DButtonCode,
  RippleButton,
  rippleButtonCode,
  ScaleButton,
  scaleButtonCode,
  SendButton,
  sendButtonCode,
  ShineButton,
  shineButtonCode,
  SkewButton,
  skewButtonCode,
  SlideTextButton,
  slideTextButtonCode,
  SparkleButton,
  sparkleButtonCode,
  SpotlightButton,
  spotlightButtonCode,
  SwipeButton,
  swipeButtonCode,
  UnlockButton,
  unlockButtonCode,
} from '../../../../components/components/button-demos'

export default function ButtonsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Buttons
        </h1>
        <p className='text-lg text-muted-foreground'>
          A diverse collection of button animations and interactions, built with
          Tailwind CSS and Motion.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        {/* Category: Visual Effects */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Visual Effects
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Border Beam'
              component={<BorderBeamButton />}
              tsCode={borderBeamButtonCode}
            />
            <ComponentPreview
              title='Gradient Glow'
              component={<GlowButton />}
              tsCode={glowButtonCode}
            />
            <ComponentPreview
              title='Shine Reflection'
              component={<ShineButton />}
              tsCode={shineButtonCode}
            />
            <ComponentPreview
              title='Sparkle Magic'
              component={<SparkleButton />}
              tsCode={sparkleButtonCode}
            />
            <ComponentPreview
              title='Glitch Text'
              component={<GlitchTextButton />}
              tsCode={glitchTextButtonCode}
            />
            <ComponentPreview
              title='Swipe Fill'
              component={<SwipeButton />}
              tsCode={swipeButtonCode}
            />
            <ComponentPreview
              title='Outline Fill'
              component={<OutlineFillButton />}
              tsCode={outlineFillButtonCode}
            />
            <ComponentPreview
              title='Gooey Blur'
              component={<GooeyButton />}
              tsCode={gooeyButtonCode}
            />
          </div>
        </div>

        {/* Category: 3D & Depth */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            3D & Depth
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='3D Push'
              component={<Push3DButton />}
              tsCode={push3DButtonCode}
            />
            <ComponentPreview
              title='Neumorphic'
              component={<NeumorphicButton />}
              tsCode={neumorphicButtonCode}
            />
            <ComponentPreview
              title='Pixel Art'
              component={<PixelButton />}
              tsCode={pixelButtonCode}
            />
            <ComponentPreview
              title='Cyberpunk'
              component={<CyberpunkButton />}
              tsCode={cyberpunkButtonCode}
            />
          </div>
        </div>

        {/* Category: Interactive */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Interactive Motion
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Magnetic'
              component={<MagneticButton />}
              tsCode={magneticButtonCode}
            />
            <ComponentPreview
              title='Spotlight'
              component={<SpotlightButton />}
              tsCode={spotlightButtonCode}
            />
            <ComponentPreview
              title='Scale'
              component={<ScaleButton />}
              tsCode={scaleButtonCode}
            />
            <ComponentPreview
              title='Icon Expand'
              component={<IconExpandButton />}
              tsCode={iconExpandButtonCode}
            />
            <ComponentPreview
              title='Text Skew'
              component={<SkewButton />}
              tsCode={skewButtonCode}
            />
            <ComponentPreview
              title='Ripple'
              component={<RippleButton />}
              tsCode={rippleButtonCode}
            />
            <ComponentPreview
              title='Interactive FAB'
              component={<FAB />}
              tsCode={fabCode}
            />
          </div>
        </div>

        {/* Category: Functional */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Functional State
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Send State'
              component={<SendButton />}
              tsCode={sendButtonCode}
            />
            <ComponentPreview
              title='Copy State'
              component={<CopyButton />}
              tsCode={copyButtonCode}
            />
            <ComponentPreview
              title='Hold to Confirm'
              component={<HoldButton />}
              tsCode={holdButtonCode}
            />
            <ComponentPreview
              title='Delete Confirm'
              component={<DeleteButton />}
              tsCode={deleteButtonCode}
            />
            <ComponentPreview
              title='Slide Info'
              component={<SlideTextButton />}
              tsCode={slideTextButtonCode}
            />
            <ComponentPreview
              title='Toggle Lock'
              component={<UnlockButton />}
              tsCode={unlockButtonCode}
            />
            <ComponentPreview
              title='Arrow Slide'
              component={<ArrowButton />}
              tsCode={arrowButtonCode}
            />
            <ComponentPreview
              title='Like Toggle'
              component={<LikeButton />}
              tsCode={likeButtonCode}
            />
            <ComponentPreview
              title='Notification Bell'
              component={<NotificationButton />}
              tsCode={notificationButtonCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
