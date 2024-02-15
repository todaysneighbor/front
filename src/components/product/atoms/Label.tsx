interface LabelProps {
  props: any
}

export default function Label({ props }: LabelProps) {
  return (
    <div className="w-[10.5rem] text-[18px] shrink-0 font-normal text-[rgb(25, 25, 25)]">
      {props}
    </div>
  )
}
