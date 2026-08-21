
export default function CircleService(radius){
    
const PI= 3.14

let area =PI *(radius ** 2)
let perimeter = (2*PI)*radius

return (area, perimeter)
}