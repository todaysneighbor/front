import Image from 'next/image'
import ImageInput from '@/components/product/molecules/ImagesInput'
import NameInput from '@/components/product/molecules/NameInput'
import CategoryInput from '@/components/product/molecules/CategoryInput'

export default function NewProduct() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      newProduct
      <form>
        <ImageInput />
        <NameInput />
        <CategoryInput />
      </form>
    </main>
  )
}
