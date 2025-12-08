'use client'

import { ComponentPreview } from '@/components/component-preview'
import {
  FloatingLabelInput,
  floatingLabelInputCode,
  OutlinedInput,
  outlinedInputCode,
  FilledInput,
  filledInputCode,
  IconInput,
  iconInputCode,
  PasswordInput,
  passwordInputCode,
  ValidatedInput,
  validatedInputCode,
  GradientBorderInput,
  gradientBorderInputCode,
  NeumorphicInput,
  neumorphicInputCode,
  UnderlineInput,
  underlineInputCode,
  GlowInput,
  glowInputCode,
  CharacterCounterInput,
  characterCounterInputCode,
  HelperTextInput,
  helperTextInputCode,
  GlassmorphicInput,
  glassmorphicInputCode,
  OTPInput,
  otpInputCode,
  TagInput,
  tagInputCode,
  CreditCardInput,
  creditCardInputCode,
  FileUploadInput,
  fileUploadInputCode,
  AnimatedBorderInput,
  animatedBorderInputCode,
  SpotlightInput,
  spotlightInputCode,
  Push3DInput,
  push3DInputCode,
  CyberpunkInput,
  cyberpunkInputCode,
  RatingInput,
  ratingInputCode,
  PhoneNumberInput,
  phoneNumberInputCode,
  CurrencyInput,
  currencyInputCode,
  PercentageInput,
  percentageInputCode,
  DatePickerInput,
  datePickerInputCode,
  SelectDropdownInput,
  selectDropdownInputCode,
  MultiSelectInput,
  multiSelectInputCode,
  RangeSliderInput,
  rangeSliderInputCode,
  StepperInput,
  stepperInputCode,
  ColorPickerInput,
  colorPickerInputCode,
  ToggleSwitchInput,
  toggleSwitchInputCode,
} from '../../../../components/components/input-demos'

export default function InputsPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Inputs
        </h1>
        <p className='text-lg text-muted-foreground'>
          A comprehensive collection of 32 input field variants with labels,
          animations, and interactions, built with Tailwind CSS and Motion.
        </p>
      </div>
      <div className='pb-12 space-y-12'>
        {/* Category: Basic Inputs */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Basic Inputs
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Floating Label'
              component={<FloatingLabelInput />}
              tsCode={floatingLabelInputCode}
            />
            <ComponentPreview
              title='Outlined'
              component={<OutlinedInput />}
              tsCode={outlinedInputCode}
            />
            <ComponentPreview
              title='Filled'
              component={<FilledInput />}
              tsCode={filledInputCode}
            />
            <ComponentPreview
              title='With Icon'
              component={<IconInput />}
              tsCode={iconInputCode}
            />
            <ComponentPreview
              title='Underline'
              component={<UnderlineInput />}
              tsCode={underlineInputCode}
            />
            <ComponentPreview
              title='Helper Text'
              component={<HelperTextInput />}
              tsCode={helperTextInputCode}
            />
          </div>
        </div>

        {/* Category: Advanced Interactions */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Advanced Interactions
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Password Toggle'
              component={<PasswordInput />}
              tsCode={passwordInputCode}
            />
            <ComponentPreview
              title='Validated'
              component={<ValidatedInput />}
              tsCode={validatedInputCode}
            />
            <ComponentPreview
              title='Character Counter'
              component={<CharacterCounterInput />}
              tsCode={characterCounterInputCode}
            />
            <ComponentPreview
              title='OTP Input'
              component={<OTPInput />}
              tsCode={otpInputCode}
            />
            <ComponentPreview
              title='Tag/Chip Input'
              component={<TagInput />}
              tsCode={tagInputCode}
            />
            <ComponentPreview
              title='Credit Card'
              component={<CreditCardInput />}
              tsCode={creditCardInputCode}
            />
            <ComponentPreview
              title='File Upload'
              component={<FileUploadInput />}
              tsCode={fileUploadInputCode}
            />
            <ComponentPreview
              title='Rating'
              component={<RatingInput />}
              tsCode={ratingInputCode}
            />
            <ComponentPreview
              title='Phone Number'
              component={<PhoneNumberInput />}
              tsCode={phoneNumberInputCode}
            />
            <ComponentPreview
              title='Currency'
              component={<CurrencyInput />}
              tsCode={currencyInputCode}
            />
            <ComponentPreview
              title='Percentage'
              component={<PercentageInput />}
              tsCode={percentageInputCode}
            />
            <ComponentPreview
              title='Date Picker'
              component={<DatePickerInput />}
              tsCode={datePickerInputCode}
            />
            <ComponentPreview
              title='Select Dropdown'
              component={<SelectDropdownInput />}
              tsCode={selectDropdownInputCode}
            />
            <ComponentPreview
              title='Multi-Select'
              component={<MultiSelectInput />}
              tsCode={multiSelectInputCode}
            />
            <ComponentPreview
              title='Toggle Switch'
              component={<ToggleSwitchInput />}
              tsCode={toggleSwitchInputCode}
            />
          </div>
        </div>

        {/* Category: Visual Effects */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Visual Effects
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Gradient Border'
              component={<GradientBorderInput />}
              tsCode={gradientBorderInputCode}
            />
            <ComponentPreview
              title='Animated Border'
              component={<AnimatedBorderInput />}
              tsCode={animatedBorderInputCode}
            />
            <ComponentPreview
              title='Glow Effect'
              component={<GlowInput />}
              tsCode={glowInputCode}
            />
            <ComponentPreview
              title='Spotlight'
              component={<SpotlightInput />}
              tsCode={spotlightInputCode}
            />
            <ComponentPreview
              title='Glassmorphic'
              component={<GlassmorphicInput />}
              tsCode={glassmorphicInputCode}
            />
            <ComponentPreview
              title='Neumorphic'
              component={<NeumorphicInput />}
              tsCode={neumorphicInputCode}
            />
            <ComponentPreview
              title='3D Push'
              component={<Push3DInput />}
              tsCode={push3DInputCode}
            />
            <ComponentPreview
              title='Cyberpunk'
              component={<CyberpunkInput />}
              tsCode={cyberpunkInputCode}
            />
          </div>
        </div>

        {/* Category: Specialized Inputs */}
        <div className='space-y-4'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            Specialized Inputs
          </h2>
          <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <ComponentPreview
              title='Range Slider'
              component={<RangeSliderInput />}
              tsCode={rangeSliderInputCode}
            />
            <ComponentPreview
              title='Number Stepper'
              component={<StepperInput />}
              tsCode={stepperInputCode}
            />
            <ComponentPreview
              title='Color Picker'
              component={<ColorPickerInput />}
              tsCode={colorPickerInputCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
