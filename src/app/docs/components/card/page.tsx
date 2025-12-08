'use client'

import { ComponentPreview } from '@/components/component-preview'
import {
  BasicCard,
  basicCardCode,
  HoverLiftCard,
  hoverLiftCardCode,
  ImageCard,
  imageCardCode,
  InteractiveCard,
  interactiveCardCode,
  GlassmorphicCard,
  glassmorphicCardCode,
  GradientBorderCard,
  gradientBorderCardCode,
  TiltCard,
  tiltCardCode,
  SpotlightCard,
  spotlightCardCode,
  ProductCard,
  productCardCode,
  StatsCard,
  statsCardCode,
  ProfileCard,
  profileCardCode,
  PricingCard,
  pricingCardCode,
  BlogPostCard,
  blogPostCardCode,
  TestimonialCard,
  testimonialCardCode,
  NotificationCard,
  notificationCardCode,
  FeatureCard,
  featureCardCode,
  EventCard,
  eventCardCode,
  TeamMemberCard,
  teamMemberCardCode,
  FlipCard,
  flipCardCode,
  ExpandableCard,
  expandableCardCode,
  NeumorphicCard,
  neumorphicCardCode,
  NeonGlowCard,
  neonGlowCardCode,
  SkeletonCard,
  skeletonCardCode,
  AchievementCard,
  achievementCardCode,
  VideoPlayerCard,
  videoPlayerCardCode,
  SocialPostCard,
  socialPostCardCode,
  MusicPlayerCard,
  musicPlayerCardCode,
  WeatherCard,
  weatherCardCode,
  CourseCard,
  courseCardCode,
  RecipeCard,
  recipeCardCode,
  JobListingCard,
  jobListingCardCode,
  BookingCard,
  bookingCardCode,
} from '../../../../components/components/card-demos'

export default function CardsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Cards
        </h1>
        <p className='text-lg text-muted-foreground'>
          A comprehensive collection of 32 card components with different
          styles, animations, and use cases, built with Tailwind CSS and Motion.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        {/* Category: Basic & Interactive */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Basic & Interactive
          </h2>
          <div className='grid gap-8 grid-cols-1'>
            <ComponentPreview
              title='Basic Card'
              component={<BasicCard />}
              tsCode={basicCardCode}
            />
            <ComponentPreview
              title='Hover Lift'
              component={<HoverLiftCard />}
              tsCode={hoverLiftCardCode}
            />
            <ComponentPreview
              title='Image Card'
              component={<ImageCard />}
              tsCode={imageCardCode}
            />
            <ComponentPreview
              title='Interactive'
              component={<InteractiveCard />}
              tsCode={interactiveCardCode}
            />
            <ComponentPreview
              title='Expandable'
              component={<ExpandableCard />}
              tsCode={expandableCardCode}
            />
            <ComponentPreview
              title='Notification'
              component={<NotificationCard />}
              tsCode={notificationCardCode}
            />
          </div>
        </div>

        {/* Category: Visual Effects */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Visual Effects
          </h2>
          <div className='grid gap-8 grid-cols-1'>
            <ComponentPreview
              title='Glassmorphic'
              component={<GlassmorphicCard />}
              tsCode={glassmorphicCardCode}
            />
            <ComponentPreview
              title='Gradient Border'
              component={<GradientBorderCard />}
              tsCode={gradientBorderCardCode}
            />
            <ComponentPreview
              title='3D Tilt'
              component={<TiltCard />}
              tsCode={tiltCardCode}
            />
            <ComponentPreview
              title='Spotlight'
              component={<SpotlightCard />}
              tsCode={spotlightCardCode}
            />
            <ComponentPreview
              title='Neumorphic'
              component={<NeumorphicCard />}
              tsCode={neumorphicCardCode}
            />
            <ComponentPreview
              title='Neon Glow'
              component={<NeonGlowCard />}
              tsCode={neonGlowCardCode}
            />
            <ComponentPreview
              title='Flip Card'
              component={<FlipCard />}
              tsCode={flipCardCode}
            />
          </div>
        </div>

        {/* Category: Content Types */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Content Types
          </h2>
          <div className='grid gap-8 grid-cols-1'>
            <ComponentPreview
              title='Product Card'
              component={<ProductCard />}
              tsCode={productCardCode}
            />
            <ComponentPreview
              title='Profile Card'
              component={<ProfileCard />}
              tsCode={profileCardCode}
            />
            <ComponentPreview
              title='Pricing Card'
              component={<PricingCard />}
              tsCode={pricingCardCode}
            />
            <ComponentPreview
              title='Blog Post'
              component={<BlogPostCard />}
              tsCode={blogPostCardCode}
            />
            <ComponentPreview
              title='Testimonial'
              component={<TestimonialCard />}
              tsCode={testimonialCardCode}
            />
            <ComponentPreview
              title='Event Card'
              component={<EventCard />}
              tsCode={eventCardCode}
            />
            <ComponentPreview
              title='Team Member'
              component={<TeamMemberCard />}
              tsCode={teamMemberCardCode}
            />
            <ComponentPreview
              title='Feature'
              component={<FeatureCard />}
              tsCode={featureCardCode}
            />
            <ComponentPreview
              title='Course Card'
              component={<CourseCard />}
              tsCode={courseCardCode}
            />
            <ComponentPreview
              title='Recipe Card'
              component={<RecipeCard />}
              tsCode={recipeCardCode}
            />
            <ComponentPreview
              title='Job Listing'
              component={<JobListingCard />}
              tsCode={jobListingCardCode}
            />
            <ComponentPreview
              title='Booking Card'
              component={<BookingCard />}
              tsCode={bookingCardCode}
            />
          </div>
        </div>

        {/* Category: Specialized */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Media & Social
          </h2>
          <div className='grid gap-8 grid-cols-1'>
            <ComponentPreview
              title='Video Player'
              component={<VideoPlayerCard />}
              tsCode={videoPlayerCardCode}
            />
            <ComponentPreview
              title='Social Media Post'
              component={<SocialPostCard />}
              tsCode={socialPostCardCode}
            />
            <ComponentPreview
              title='Music Player'
              component={<MusicPlayerCard />}
              tsCode={musicPlayerCardCode}
            />
          </div>
        </div>

        {/* Category: Utility */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Utility
          </h2>
          <div className='grid gap-8 grid-cols-1'>
            <ComponentPreview
              title='Stats Card'
              component={<StatsCard />}
              tsCode={statsCardCode}
            />
            <ComponentPreview
              title='Weather Card'
              component={<WeatherCard />}
              tsCode={weatherCardCode}
            />
            <ComponentPreview
              title='Achievement'
              component={<AchievementCard />}
              tsCode={achievementCardCode}
            />
            <ComponentPreview
              title='Skeleton Loading'
              component={<SkeletonCard />}
              tsCode={skeletonCardCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
