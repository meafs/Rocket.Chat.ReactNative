import React from 'react';
import { View } from 'react-native';

import { themes } from '../../constants/colors';
import { DISPLAY_MODE_CONDENSED } from '../../constants/constantDisplayMode';
import IconOrAvatar from './IconOrAvatar';
import styles from './styles';

interface IWrapper {
	accessibilityLabel: string;
	avatar: string;
	avatarSize: number;
	type: string;
	theme: string;
	rid: string;
	children: JSX.Element;
	displayMode: string;
	prid: string;
	showLastMessage: boolean;
	status: string;
	isGroupChat: boolean;
	teamMain: boolean;
	showAvatar: boolean;
}

const Wrapper = ({ accessibilityLabel, avatar, avatarSize, type, theme, rid, children, displayMode, ...props }: IWrapper) => (
	<View
		style={[styles.container, displayMode === DISPLAY_MODE_CONDENSED && styles.containerCondensed]}
		accessibilityLabel={accessibilityLabel}>
		<IconOrAvatar theme={theme} displayMode={displayMode} avatar={avatar} {...props} />
		<View
			style={[
				styles.centerContainer,
				{
					borderColor: themes[theme].separatorColor
				},
				displayMode === DISPLAY_MODE_CONDENSED && styles.condensedPaddingVertical
			]}>
			{children}
		</View>
	</View>
);

export default Wrapper;
