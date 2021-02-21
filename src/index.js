import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.image()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          textMessage="Awesome Blog"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.image()}
          author="Alex"
          timeAgo="Today at 5:15PM"
          textMessage="Great News"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageSrc={faker.image.image()}
          author="Jayne"
          timeAgo="Yesterday at 09:16AM"
          textMessage="Welcome to my blog"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
