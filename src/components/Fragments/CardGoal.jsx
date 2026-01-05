import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CompositionExample from "../Elements/CompositionExample";

function CardGoal({ data }) {
  const present = Number(data?.present_amount ?? 0);
  const target = Number(data?.target_amount ?? 0);

  const chartValue = target > 0 ? (present / target) * 100 : 0;

  return (
    <Card
      title="Goals"
      desc={
        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="flex">
              <span className="text-2xl font-bold me-4">${target}</span>
              <div className="p-2 bg-gray-05 text-gray-01 rounded-md box-border">
                <Icon.Edit size={16} />
              </div>
            </div>
            <div>Nov, 2023</div>
          </div>

          <div className="border-b-2 border-gray-05 my-4"></div>

          <div className="flex justify-between">
            <div>
              <div className="flex mt-3 mb-10 text-gray-01">
                <Icon.Award />
                <div className="ms-2">
                  <div>Target Achieved</div>
                  <div className="font-bold text-xl text-black">${present}</div>
                </div>
              </div>

              <div className="flex text-gray-01">
                <Icon.Target />
                <div className="ms-2">
                  <div>This Month Target</div>
                  <div className="font-bold text-xl text-black">${target}</div>
                </div>
              </div>
            </div>

            <div className="ms-4 text-center">
              <CompositionExample data={chartValue} />
              <div className="flex justify-between">
                <span className="text-gray-03">$0</span>
                <span className="font-bold text-2xl">12K</span>
                <span className="text-gray-03">$20K</span>
              </div>
              <div className="mt-2">Target vs Achievement</div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default CardGoal;
