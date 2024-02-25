import TalkRoomItem from '../moleclues/TalkRoomItem'

export interface TalkRoomType {
  ProfileImageUrl: string
  ProductImageUrl: string
  StoreName: string
  LastTalkLine: string
  Date: string
}

const sampleTalkRoom: TalkRoomType = {
  ProfileImageUrl:
    'https://m.media-amazon.com/images/M/MV5BMjI1YTZiYWMtZThjYi00Y2MxLWE4ZDAtZTg5YzFjZTU5ZTk3XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg',
  ProductImageUrl:
    'https://i.ebayimg.com/images/g/r4UAAOSwgQhgsMhT/s-l1600.jpg',

  StoreName: '로이스',
  LastTalkLine: 'Guten Tag. Mein Name ist Marco ich bin Marco.',
  Date: '2024-02-29',
}
const sampleTalkRoomList: TalkRoomType[] = [
  sampleTalkRoom,
  sampleTalkRoom,
  sampleTalkRoom,
]

export default function TalkRoomList() {
  return (
    <div className="">
      <div className="text-[28px] font-bold p-4">전체 대화</div>
      {sampleTalkRoomList?.map((item: TalkRoomType) => {
        return (
          <div>
            <TalkRoomItem props={item} />
          </div>
        )
      })}
    </div>
  )
}
