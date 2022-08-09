import { HStack, Avatar, Text } from "@chakra-ui/react";

const UserTableNameWithProfile = ({ data }) => {
    const user = data.row.original;
    return (
        <HStack align="center">
            {user?.other_info?.profile_pic_url ? (
                <Avatar
                    size="sm"
                    src={`${process.env.REACT_APP_API_URL}/uploads/${user.other_info.profile_pic_url}`}
                    name={user.name}
                />
            ) : (
                <Avatar size="sm" name={user.name} />
            )}
            <Text>{user.name}</Text>
        </HStack>
    );
};

export default UserTableNameWithProfile;
