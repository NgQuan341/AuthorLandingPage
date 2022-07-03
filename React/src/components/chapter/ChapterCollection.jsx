import React, { useState } from "react";
import ChapterItem from "./ChapterItem";

const ChapterCollection = (props) => {
    const {style} = props;
    const [pages, setPages] = useState([
        {
            id:1,
            title:`Title Page`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:2,
            title:`Copyright`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:3,
            title:`Table of contents`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:4,
            title:`Dedication`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:5,
            title:`Foreword`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:6,
            title:`Prologue`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:7,
            title:`Epilogue`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
        {
            id:8,
            title:`Epigraph`,
            content:` On her way she met a copy. The copy warned the Little Blind Text, that
            where it came from it would have been rewritten a thousand times and
            everything that was left from its origin would be the word "and" and
            the Little Blind Text should turn around and return to its own, safe
            country. But nothing the copy said could convince her and so it didn’t
            take long until a few insidious Copy Writers ambushed her, made her
            drunk with Longe and Parole and dragged her into their agency, where
            they abused her for their.`
        },
    ])
    return (
    <div className={style.chapter_collection}>
        {
            pages.map(page=>(
                <ChapterItem key={page.id} style={style} page={page}/>                
            ))
        }
    </div>
  );
};

export default ChapterCollection;