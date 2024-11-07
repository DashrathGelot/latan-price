"use client";
import { levels, plans } from "./config";
import Level from "./Level";
import Plan from "./Plan";

export default function Suntan() {
    const onLevel = () => {

    }

    const onPlan = () => {

    }

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col animate-fade-right mt-14 mr-10">
                <h2 className="text-3xl mb-5 font-semibold text-amber-900 animate-fade-down">Sun tan</h2>
                { levels.map(level => <Level key={level.name} onClick={onLevel} name={level.name} price={level.price}/>) }
            </div>
            { plans.map(plan => 
                <Plan 
                    key={plan.title} 
                    onClick={onPlan} 
                    title={plan.title} 
                    price={plan.price} 
                    noOfChecks={plan.noOfChecks} 
                    color={plan.color}
                    text={plan.text}
                    levelPrices={plan.levelPrices}
                />) 
            }     
        </div>
    );
}
