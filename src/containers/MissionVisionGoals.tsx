import { motion } from "framer-motion";
// Svgs
import MissionSvg from "../assets/svgs/mission.svg";
import VisionSvg from "../assets/svgs/vision.svg";
import GoalsSvg from "../assets/svgs/goals.svg";
// Model
import MissionVisionGoals from "../models/missionVisionGoals";

const hover = { scale: 0.95, rotate: 5 };
const tap = { scale: 0.95, rotate: 5 };
class MissionVisionGoalsProps {
  data?: MissionVisionGoals;
}
export default ({ data = {} }: MissionVisionGoalsProps) => {
  return (
    <div className="container mx-auto flex flex-wrap self-stretch">
      <div className="md:w-1/3 w-full p-3" data-aos="fade-up">
        <motion.div
          whileHover={hover}
          whileTap={tap}
          className="rounded shadow p-6 h-full"
        >
          <div className="flex justify-center">
            <img src={MissionSvg} width="180" height="180" />
          </div>
          <h4 className="flex justify-center items-baseline text-xl font-medium">
            Misyon
          </h4>
          <div className="text-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-100">
            {data.mission}
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/3 w-full p-3" data-aos="fade-up">
        <motion.div
          whileHover={hover}
          whileTap={tap}
          className="rounded shadow p-6 h-full"
        >
          <div className="flex justify-center">
            <img src={VisionSvg} width="180" height="180" />
          </div>
          <h4 className="flex justify-center items-baseline text-xl font-medium">
            Vizyon
          </h4>
          <div className="text-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-100">
            {data.vision}
          </div>
        </motion.div>
      </div>
      <div className="md:w-1/3 w-full p-3" data-aos="fade-up">
        <motion.div
          whileHover={hover}
          whileTap={tap}
          className="rounded shadow p-6 h-full"
        >
          <div className="flex justify-center">
            <img src={GoalsSvg} width="180" height="180" />
          </div>
          <h4 className="flex justify-center items-baseline text-xl font-medium">
            Hedefler
          </h4>
          <div className="text-center text-gray-500 text-sm mt-3 pt-3 border-t border-gray-100">
            {data.goals}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
