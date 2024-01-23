import Image from 'next/image'
import ImageInput from '@/components/product/molecules/ImagesInput'

export default function NewProduct() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      newProduct
      <form>
        <ImageInput />
      </form>
    </main>
  )
}
