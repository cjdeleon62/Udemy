import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					avatarSrc={faker.image.avatar()}
					author="Sam"
					timeAgo="Today at 4:45PM"
					text="Blog post 1"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatarSrc={faker.image.avatar()}
					author="Alex"
					timeAgo="Today at 2:00AM"
					text="Blog post 2"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatarSrc={faker.image.avatar()}
					author="Jane"
					timeAgo="Yesterday at 5:00PM"
					text="Blog post 3"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
