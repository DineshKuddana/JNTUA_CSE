import React, { useEffect } from 'react';
import './Notification.css';

function Notification() {
    useEffect(() => {
        // populateNews1();
        populateNews2();
    }, []);

    // const newsData1 = [
    //     { title: "News Article 1", content: "Lorem ipsum dolor sit amet.", date: "2023-09-14", link: "https://example.com/news1" },
    //     { title: "News Article 2", content: "Consectetur adipiscing elit.", date: "2023-09-13", link: "https://example.com/news2" },
    //     { title: "News Article 3", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-09-12", link: "https://example.com/news3" },
    //     { title: "News Article 4", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-09-12", link: "https://example.com/news3" },
    //     { title: "News Article 5", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "2023-09-12", link: "https://example.com/news3" },
    // ];

    const newsData2 = [
        { title: "Examination TimeTable-III B.tech.II sem.(R20) I Mid Examinations", content: "Examination TimeTable-III B.tech.II sem.(R20) I Mid Examinations.", date: "March 2024", link: "https://example.com/update1" },
        { title: "Important Update 2Examination Timetable of III B.Tech. I-Sem. (R20) Minor Degree Exams. February 2024", content: "Examination Timetable of III B.Tech. I-Sem. (R20) Minor Degree Exams. February 2024", date: "2023-09-10", link: "https://example.com/update2" },
        { title: "Examination Timetable of III B.Tech. II-Sem. (R20) I-Mid Exams. March 2024", content: "Examination Timetable of III B.Tech. II-Sem. (R20) I-Mid Exams. March 2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Examination Timetable - III B.Tech. I-Sem. (R20) Honours Degree Exams. Feb. 2024", content: "Examination Timetable - III B.Tech. I-Sem. (R20) Honours Degree Exams. Feb. 2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Examination Notification-I MCA-I,II sem(R15&R20)", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Results Declaration-IIB.Tech. I-Sem. (R20) Exams. Dec. 2023", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Results Declaration-M.Tech. III-Sem. (R21) Regular & Suppl. Exams. Jan. 2024", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
        { title: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", content: "Examination Time Table-I MCA-I,II Sem(R20)(R15)-Regular,Supple-Feb-2024", date: "2023-09-09", link: "https://example.com/update3" },
    ];  

    // function populateNews1() {
    //     const newsList1 = document.getElementById('news-list-1');
    //     newsData1.forEach(news => {
    //         const listItem = document.createElement('li');
    //         listItem.classList.add('items');
    //         const link = document.createElement('a');
    //         link.href = news.link;
    //         link.textContent = `${news.title} - Date: ${news.date}`;
    //         listItem.appendChild(link);
    //         newsList1.appendChild(listItem);
    //     });
    // }

    function populateNews2() {
        const newsList2 = document.getElementById('news-list-2');
        newsData2.forEach(news => {
            const listItem = document.createElement('li');
            listItem.classList.add('items');
            const link = document.createElement('a');
            link.href = news.link;
            link.textContent = `${news.title} - Date: ${news.date}`;
            listItem.appendChild(link);
            newsList2.appendChild(listItem);
        });
    }

    function pauseScroll(event) {
        const scrollList = event.currentTarget.querySelector('ul');
        scrollList.style.animationPlayState = 'paused';
    }

    function resumeScroll(event) {
        const scrollList = event.currentTarget.querySelector('ul');
        scrollList.style.animationPlayState = 'running';
    }

    return (
        <>
            <h1 className='main-head'>Notifications</h1>
            <div className="news">
                {/* <div className="notice-board" id="notice-board-1">
                    <h1 className='news-head'>Latest News</h1>
                    <div className="scroll-container" onMouseEnter={pauseScroll} onMouseLeave={resumeScroll}>
                        <ul id="news-list-1" className='ssb'></ul>
                    </div>
                </div> */}

                <div className="notice-board" id="notice-board-2">
                    <h1 className='news-head'>Important Updates</h1>
                    <div className="scroll-container" onMouseEnter={pauseScroll} onMouseLeave={resumeScroll}>
                        <ul id="news-list-2" className='ssb'></ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
