import React from 'react'

const ProfileSkeletonLoader = () => {
  return (
		<div>
			<div className="animate-pulse">
				<div className="flex items-center border-b pb-4 mb-4">
					<div className="flex">
						<div className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-300 mr-4"></div>
					</div>
					<div className="h-8 bg-gray-300 rounded w-1/2"></div>
				</div>
			</div>
		</div>
	);
}

export default ProfileSkeletonLoader
