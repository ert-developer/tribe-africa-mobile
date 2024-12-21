import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomButton from "./atoms/button/button";
import { theme } from "@/constants/theme";

interface Props {
    segments: {
        [key: string]: React.ReactNode,
    };
    children: React.ReactNode;
}

const SegmentedControl: React.FC<Props> = ({segments, children}) => {
    const [selected, setSelected] = useState('');

    const fields = Object.keys(segments);
    const handleClick = (field: string) => {
        if(field == selected) setSelected('');
        else
        setSelected(field);
    }
    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
                data={fields}
                renderItem={fields => (
                    <CustomButton
                        onPress={() => handleClick(fields.item)}
                        style={[styles.button, {
                            backgroundColor: selected == fields.item ? theme.colors.secondary : theme.colors.light,
                        }]}
                        textStyle={{
                            color: selected == fields.item ? theme.colors.light : theme.colors.dark,
                        }}
                    >
                        {fields.item}
                    </CustomButton>
                )}
            />
            {segments[selected] ? segments[selected] : children}
        </View>
    );
}

export default SegmentedControl;

const styles = StyleSheet.create({
    container: {
        padding: theme.spacing.small,
        gap: theme.spacing.small
    },
    button: {
        borderRadius: theme.borderRadius.full,
        borderWidth: 1,
        borderColor: 'gray'
    }
})