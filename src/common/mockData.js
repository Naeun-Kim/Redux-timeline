const friends = [
    { name: '백현', age: 30 },
    { name: '카이', age: 28 },
    { name: '수호', age: 31 },
    { name: '세훈', age: 28 },
];

const timelines = [
    { desc: '필라테스 다녀옴', likes: 0 },
    { desc: '성수동 어니언', likes: 10 },
    { desc: '친구랑 한잔', likes: 5 },
    { desc: '이태원 업무 미팅', likes: 15 },
];

function makeDataGenerator(items) {
    let itemIndex = 0;
    return function getNextData() {
        const item = items[itemIndex % items.length];
        itemIndex += 1;
        return { ...item, id: itemIndex };
    };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);