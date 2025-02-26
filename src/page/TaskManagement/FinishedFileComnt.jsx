import React from "react";
import { IoSendOutline } from "react-icons/io5";
import { VscReply } from "react-icons/vsc";
import { RiGalleryLine } from "react-icons/ri";
import { useGetCommentsQuery } from "../redux/api/taskApi";
import { useParams } from "react-router-dom";
export const FinishedFileComnt = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCommentsQuery(id);
  console.log(data);
  return (
    <div>
      {/* Right Comments Section */}
      <div className=" bg-white border-l ">
        <div className="text-lg font-bold mb-4 border-b">
          <h2 className="p-3">Comments</h2>
        </div>
        <div className="pl-4">
          <div className="mb-6 relative">
            <textarea
              placeholder="Leave a comment"
              className="w-full border border-gray-300 rounded-md p-3  mb-3 resize-none"
              rows={4}
            />
            <button className="absolute flex gap-3 bottom-6 left-[5px] text-2xl">
              <RiGalleryLine />
            </button>
            <button className="absolute flex gap-3 bottom-6 right-[5px] bg-[#2A216D] text-white px-4 py-2 rounded-md hover:bg-purple-600">
              Send
              <IoSendOutline className="text-xl mt-[3px]" />
            </button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-start gap-4">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-900">Darlene Robertson</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Hi</p>
            <p className="text-gray-600 text-sm mt-2">
              Thank you for your order. Help clients visualize your listing and
              its surroundings by capturing shots from the sky.
            </p>
            <button className="text-[#2A216D] flex gap-3 mt-2 hover:underline">
              <VscReply className="text-xl" />
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
