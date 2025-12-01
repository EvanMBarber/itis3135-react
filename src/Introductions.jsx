import { useEffect , useState } from "react";
export default function Introductions() {
    const [introductions, setIntroductions] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch("https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1")
            .then((response) => {
                if (response.ok) {
        
                    return response.json();
                }
                else {
                    throw new Error("Network response had an error");
                }
            })
            .then((data) => setIntroductions(data))
            .catch((error) => setError(error.message));
    }, []);

    return <>
        {introductions.map((data, index) => (
            <article key={index}>
                <hr/>
                {data.name.first} {data.name.middleInitial ? `${data.name.middleInitial}.` : ""} {data.name.last} {data.divider} {data.mascot} 
                <figure>
                    <img src={`https://dvonb.xyz${data.media.src}`} width={300}></img>
                </figure>
                <figcaption><em>{data.media.caption}</em></figcaption>
                <p>{data.personalStatement}</p>
                <div className='courses'>
                    <ul>
                        <li><strong>Personal Background:</strong> {data.backgrounds.personal}</li>
                        <li><strong>Professional Background:</strong> {data.backgrounds.professional}</li>
                        <li><strong>Academic Background:</strong> {data.backgrounds.academic}</li>
                        <li><strong>Subject Background:</strong> {data.backgrounds.subject}</li>
                        <li><strong>Courses that I'm taking:</strong></li>
                        <ul>
                    {data.courses.map((course, index) => <li key={index}>{course.dept} <strong>{course.num} - {course.name}:</strong> {course.reason} </li>)}
                        </ul>
                    </ul>
                </div>
                <p>{data.funFact}</p>
                <p>{data.quote.text} <br /><em>{data.quote.author}</em></p>
                <a href={data.links.charlotte}>Charlotte Website</a> {data.divider} <a href={data.links.github}>github</a> {data.divider} <a href={data.links.githubio}>github.io</a> {data.divider} <a href={data.links.itis3135}>Course Webpage</a> {data.divider} <a href={data.links.freecodecamp}>FreeCodeCamp</a> {data.divider} <a href={data.links.codecademy}>Codecademy</a> {data.divider} <a href={data.links.linkedin}>Linkedin</a>
            </article>))}
       
    </>
}