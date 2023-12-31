"use client"
import PassChildrenProp from "@/components/children_prop/passChildrenProps"
import OnClick from "@/components/event-handling/onClick"
import OnChange from "@/components/event-handling/onChange"
import OnKeyDown from "@/components/event-handling/onKeyDown"
import PassingFunction from "@/components/passing_function_as_props/PassingFunction"
import State from "@/components/state/index"

const Level3 = () => {

  return (

    <div>


      <center className="p-10 m-10 border-4 border-green-600 rounded-md text-xl font-bold ">Handling Events</center>
      <OnClick />
      <OnChange />
      <OnKeyDown />


      <center className="p-10 m-10 border-4 border-green-600 rounded-md text-xl font-bold ">Passing Functions  vis props </center>
      <PassingFunction />



      <center className="p-10 m-10 border-4 border-green-600 rounded-md text-xl font-bold ">All About State </center>
      <State />



      <center className="p-10 m-10 border-4 border-green-600 rounded-md text-xl font-bold ">Passing Components & elements as Children</center>
      <PassChildrenProp />






    </div>
  )
}

export default Level3;