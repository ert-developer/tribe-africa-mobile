import { theme } from '@/constants/theme';
import React, { useEffect, useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { SelectCountry } from 'react-native-element-dropdown';

  const local_data = [
    {
      value: '1',
      lable: 'Country 1',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '2',
      lable: 'Country 2',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '3',
      lable: 'Country 3',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '4',
      lable: 'Country 4',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '5',
      lable: 'Country 5',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];

  const CountryDropdown = ({action}: {action: (country: string) => void}) => {
    const [country, setCountry] = useState('1');

    useEffect(() => {
        action(country);
    },[country]);

    return (
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={styles.imageStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
      />
    );
  };

  export default CountryDropdown;

  const styles = StyleSheet.create({
    dropdown: {
      backgroundColor: theme.colors.light,
      padding: theme.spacing.extraSmall,
      paddingVertical: theme.spacing.small,
      marginVertical: theme.spacing.small,
      borderWidth: 1/2,
      borderColor: 'gray',
      borderRadius: theme.borderRadius.small
    },
    imageStyle: {
      width: 2 * theme.fonts.fontSize.extraLarge,
      height: undefined,
      aspectRatio: 3/2,
      borderRadius: theme.borderRadius.small
    },
    placeholderStyle: {
      fontSize: theme.fonts.fontSize.medium,
    },
    selectedTextStyle: {
      fontSize: theme.fonts.fontSize.medium,
      marginLeft: theme.spacing.small,
    },
    iconStyle: {
      width: theme.fonts.fontSize.extraLarge,
      height: theme.fonts.fontSize.extraLarge,
    },
    inputSearchStyle: {
    },
  });