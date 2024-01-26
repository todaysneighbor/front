'use client'

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const StyledTodayRecommendItem = styled.div`
    width: 196px;
    height: 276px;
    margin-right: 11px;
    margin-bottom: 11px;

    // 5번째 아이템은 margin이 0px
    &:nth-child(5n) {
        margin-right: 0;
    }
`;

const ImageContainer = styled.div`
    width: 194px;
    height: 194px;
    
`;

const Container = styled.div`
    width: 174px;
    height: 50px;
    padding: 15px 10px;
`;

const Text = styled.div`
    width: 174px;
    height: 34px;
    padding-bottom: 20px;
    font-size: 14px;

    // 174px 이상이면 ...
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Information = styled.div`
    width: 174px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export interface TodayRecommendItemProps {
    imgSrc: string;
    itemName: string;
    itemPrice: number;
    itemDate: Date;
    itemId: number;
}

const TodayRecommendItem = ({  
    itemId,
    imgSrc,
    itemName,
    itemPrice,
    itemDate
}: TodayRecommendItemProps ) => {
    const [standard, setStandard] = useState<string>();
    const [time, setTime] = useState<number>();

    // 지금 시간
    const currentDate: Date = new Date();
    // 물건 작성 시간
    const itemDateObject: Date = new Date(itemDate);
    // 차이
    const timeDifference: number = currentDate.getTime() - itemDateObject.getTime();
    // 날짜 차이
    const daysDifference: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // 시간 차이
    const timeDifference_24: number = Math.floor(timeDifference / (1000 * 60 * 60 ));
    
    useEffect(() => {
        // 작성한지 24시간 안
        if (timeDifference_24 < 24) {
            setStandard("시간 전")
            setTime(timeDifference_24)
        } else {
            setStandard("일 전")
            setTime(daysDifference)
        }
    }, [])
    
    return (
        <StyledTodayRecommendItem>
            <Link href={`/products/${itemId}`} style={{ border: '1px solid #EEEEEE', display: 'inline-block', height: '276px' }}>
                <ImageContainer>
                    <Image src={imgSrc} alt="상품 이미지" width={194} height={194}></Image>
                </ImageContainer>
                <Container>
                    <Text>{itemName}</Text>
                    <Information>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{itemPrice.toLocaleString()}</div>
                            <div style={{ marginLeft: '3px', fontSize: '13px' }}>원</div>
                        </div>
                        <div style={{ color: '#898989', fontSize: '11px'}}>
                            {time}{standard}
                        </div>
                    </Information>
                </Container>
            </Link>
        </StyledTodayRecommendItem>
    );
}

export default TodayRecommendItem;