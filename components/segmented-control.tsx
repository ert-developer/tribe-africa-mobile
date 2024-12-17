import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomButton from "./atoms/button/button";
import { theme } from "@/constants/theme";

interface SegmentProps {
    label: string,
    value: string,
}

const SegmentedControl: React.FC<{fields: SegmentProps[], setSegment: (segment: string) => void}> = ({fields, setSegment}) => {
    const [selected, setSelected] = useState('');

    const handleClick = (field: SegmentProps) => {
        setSelected(selected == field.value ? '' : field.value);
        setSegment(selected == field.value ? '' : field.value);
    }
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
            data={fields}
            renderItem={(fields) => (
                <CustomButton
                    onPress={() => handleClick(fields.item)}
                    style={[styles.button, {
                        backgroundColor: selected == fields.item.value ? theme.colors.secondary : theme.colors.light,
                    }]}
                    textStyle={{
                        color: selected == fields.item.value ? theme.colors.light : theme.colors.dark,
                    }}
                >
                    {fields.item.label}
                </CustomButton>
            )}
        />
    );
}

export default SegmentedControl;

const styles = StyleSheet.create({
    container: {
        margin: theme.spacing.small,
        gap: theme.spacing.small
    },
    button: {
        borderRadius: theme.borderRadius.full,
        borderWidth: 1,
        borderColor: 'gray'
    }
})