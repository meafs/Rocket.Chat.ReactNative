import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { themes } from '../../constants/colors';
import Avatar from '../../containers/Avatar';
import TypeIcon from './TypeIcon';

const Wrapper = ({
	accessibilityLabel,
	avatar,
	avatarSize,
	type,
	theme,
	rid,
	children,
	showAvatar,
	displayType,
	prid,
	status,
	isGroupChat,
	teamMain
}) => {
	const iconOrAvatar = () => {
		if (showAvatar) {
			return (
				<Avatar
					text={avatar}
					size={avatarSize}
					type={type}
					style={styles.avatar}
					rid={rid}
				/>
			);
		}

		if (!showAvatar && displayType === 'expanded') {
			return (
				<View style={styles.typeIcon}>
					<TypeIcon
						type={type}
						prid={prid}
						status={status}
						isGroupChat={isGroupChat}
						theme={theme}
						teamMain={teamMain}
					/>
				</View>
			);
		}
	};


	return (
		<View
			style={styles.container}
			accessibilityLabel={accessibilityLabel}
		>
			{iconOrAvatar()}
			<View
				style={[
					styles.centerContainer,
					{
						borderColor: themes[theme].separatorColor
					}
				]}
			>
				{children}
			</View>
		</View>
	);
};

Wrapper.propTypes = {
	accessibilityLabel: PropTypes.string,
	avatar: PropTypes.string,
	avatarSize: PropTypes.number,
	type: PropTypes.string,
	theme: PropTypes.string,
	rid: PropTypes.string,
	children: PropTypes.element,
	showAvatar: PropTypes.bool,
	displayType: PropTypes.string,
	prid: PropTypes.string,
	status: PropTypes.string,
	isGroupChat: PropTypes.bool,
	teamMain: PropTypes.bool
};

export default Wrapper;
