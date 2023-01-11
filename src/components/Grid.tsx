import Grid2 from "@mui/material/Unstable_Grid2";
import Categories from "./Category/Categories";
import Category from "./Category/Category";
import PostBlock from "./Post/PostBlock";

export default function Grid() {
  let home : boolean = true;
  let AA 

  if (home) {
    AA = <Categories></Categories>
  }else{
    AA = <Categories></Categories>
  }

  return (
    <div className="bg-neutral-100">
      <div className="flex">
        <div className="w-1/12"/>
        <div className="w-8/12 mt-12 border-2 border-rose-600">
          {AA}
          <PostBlock></PostBlock>
          <PostBlock></PostBlock>
          <PostBlock></PostBlock>
        </div>
        <div className="w-2/12 mt-12 border-rose-400 border-2">
          <Category/>
        </div>
        <div className="w-1/12"/>
      </div>
    </div>
  )
}