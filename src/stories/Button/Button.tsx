import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../theme';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  style?: React.CSSProperties;
}

interface VariantProps {
  primary?: boolean;
  theme: Theme;
}

const getVariantStyles = ({ primary = false, theme }: VariantProps) =>
  primary
    ? css`
            color: white;
            background-color: ${theme.colors.primary};
    `
    : css`
            color: #333;
            background-color: transparent;
            box-shadow: ${theme.colors.text} 0px 0px 0px 1px inset;
    `;

interface SizeProps {
  size?: 'small' | 'medium' | 'large';
  theme: Theme;
}

const getSizeStyles = ({ size = 'medium', theme }: SizeProps) => {
  switch (size) {
    case 'small': {
      return css`
        font-size: ${theme.typography.size.s1}px;
        padding: 10px 16px;
        border-radius: ${theme.spacing.borderRadius.small}px;
      `;
    }
    case 'large': {
      return css`
        font-size: ${theme.typography.size.s3}px;
        padding: 12px 24px;
        border-radius: ${theme.spacing.borderRadius.default}px;
      `;
    }
    default: {
      return css`
        font-size: ${theme.typography.size.s2}px;
        padding: 11px 20px;
        border-radius: ${theme.spacing.borderRadius.default}px;
      `;
    }
  }};

/**
 * Primary UI component for user interaction
 */
const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.type.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({primary, theme}) => getVariantStyles({primary, theme})}
  ${({size, theme}) => getSizeStyles({size, theme})}
  ${({ backgroundColor }: ButtonProps) => backgroundColor && css`
    background-color: ${backgroundColor};
  `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...rest }: ButtonProps) => <StyledButton label={label} {...rest}>{label}</StyledButton>;
