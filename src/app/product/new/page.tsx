import Image from 'next/image'
import ImageInput from '@/components/product/molecules/ImagesInput'
import NameInput from '@/components/product/molecules/NameInput'
import CategoryInput from '@/components/product/molecules/CategoryInput'
import ExchangeInput from '@/components/product/molecules/ExchangeInput'

export default function NewProduct() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      newProduct
      <form id="portal">
        <ImageInput />
        <NameInput />
        <CategoryInput />
        <ExchangeInput />
      </form>
    </main>
  )
}
