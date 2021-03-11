import React from 'react'
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Carlos Successfully Creates a LinkedIn Clone", "Top news - 54,338 readers")}
            {newsArticle("Corona Virus: US updates", "Top news - 14,708 readers")}
            {newsArticle("Owning your confidence", "Top news - 5,384 readers")}
            {newsArticle("Meet the one-way job interview", "Top news - 37,278 readers")}
            {newsArticle("Signs air travel is nearing takeoff", "Top news - 7,930 readers")}
        </div>
    )
}

export default Widgets
