import notes from "./note";
import Card from "./CardTag";
function BodyPart(){
    return(
        notes.map(note => (
            <Card 
                key={note.key}
                title={note.title}
                content={note.content}
            />
        ))
    )
}
export default BodyPart;