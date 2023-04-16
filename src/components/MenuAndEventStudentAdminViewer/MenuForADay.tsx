import { getMenuItemsBasedByDate, MenuItem } from "../../stores/MenuItem";
import MenuItemCard from "./MenuItemCard";
import { useState } from "react";


export default function MenuForADay(props: any) {
  const MealTimes: string[] = ["Breakfast", "Lunch", "Dinner", "Late Night", "All Day", "View All"];
  const [selectedMealTime, setSelectedMealTime] = useState("View All");
  const [modalVisible, setModalVisible] = useState(false);

  // a function that converts a day,month,year to a string
  function formatDateString(day: number, month: number, year: number): string {
    const date: Date = new Date(year, month - 1, day); // Subtract 1 from month to account for zero-based indexing
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }

  function handleMealTimeSelection(e: any) {
    const value = e.target.value;
    if (MealTimes.includes(value)) {
      setSelectedMealTime(value);
    } else {
      setSelectedMealTime("View All");
    }
  }

  console.log(props.diningHallId, props.menuItems);

  return (
    <>

      {/* ****************MENU ITEMS***********************************/}
      <div className="grid-menu-item-container">
      {/* ****************DROP DOWN MENU***********************************/}
      <div className="grid-item">
      <article className="prose text-center">
        <h1 > Menu Items for {formatDateString(props.day, props.month, props.year)} </h1>
        <div>
          <label htmlFor="meal-time-select"></label>
          <select  id="meal-time-select" className="select select-bordered w-full max-w-xs" onChange={handleMealTimeSelection}>
            <option value="View Day"> Select Meal Time</option>
            {MealTimes.map((mealTime) => (
              <option key={mealTime} value={mealTime}>
                {mealTime}
              </option>
            ))}
          </select>
          {
            selectedMealTime && <p> You a now viewing the {selectedMealTime} menu!</p>
          }
        </div>
      </article>
      </div>
        {
          props.menuItems.map((menuItem: any, index: number) => (
            // regex to remove all white space + triple ternary a ? b : (c ? d : e)
            ((menuItem.mealType? menuItem.mealType.toUpperCase().replace(/ /g, '') : "breakfast") === selectedMealTime.toUpperCase().replace(/ /g, '')) 
            ?
              <MenuItemCard diningHallId={props.diningHallId} day={props.day} month={props.month} year={props.year} index={index} menuItem={menuItem} key={menuItem._id.toString()} /> :
            (selectedMealTime.replace(/ /g, '').toUpperCase() === "View All".replace(/ /g, '').toUpperCase() ? 
            <MenuItemCard  diningHallId={props.diningHallId}  day={props.day} month={props.month} year={props.year} index={index} menuItem={menuItem} key={menuItem._id.toString()} /> : null)
          ))
        }
      </div>

      <style scoped>
        {`
            .grid-menu-item-container {
              display: flex;
              flex-wrap: nowrap;
              overflow: auto;
              flex-direction: column;
              align-content: center;
              justify-content: center;
              align-items: center;
              gap: 20px;
            }

            .grid-item {
              flex: 0 0 100%;
              max-width: 100%;
            }
        
          `}
      </style>
    </> 
  )
}