import Image from 'next/image'
import ImageInput from '@/components/product/molecules/ImagesInput'
import NameInput from '@/components/product/molecules/NameInput'
import CategoryInput from '@/components/product/molecules/CategoryInput'
import ExchangeInput from '@/components/product/molecules/ExchangeInput'
import QualityInput from '@/components/product/molecules/QualityInput'
import PriceInput from '@/components/product/molecules/PriceInput'
import DescriptionInput from '@/components/product/molecules/DescriptionInput'
import TagInput from '@/components/product/molecules/TagInput'
import Line from '@/components/product/atoms/Line'
import FormHeader from '@/components/product/molecules/FormHeader'
import QuantityInput from '@/components/product/molecules/QuantityInput'

export default function NewProduct() {
  return (
    <main className="flex min-h-screen w-[1024px] mt-[56px] mb-[224px] mx-auto flex-col justify-center">
      <FormHeader />
      <form id="portal">
        <ImageInput />
        <Line />
        <NameInput />
        <Line />
        <CategoryInput />
        <Line />
        <ExchangeInput />
        <Line />
        <QualityInput />
        <Line />
        <PriceInput />
        <Line />
        <DescriptionInput />
        <Line />
        <TagInput />
        <Line />
        <QuantityInput />
      </form>
    </main>
  )
}
