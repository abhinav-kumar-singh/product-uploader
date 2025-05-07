import { JSX } from 'react';
import { buttonStyles } from '../components/common/button/buttonVarients';

interface ILabel {
  labelValue: string;
  htmlFor: string;
  className?: string;
  required?: boolean;
}

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  id?: string;
  required?: boolean;
}

interface Option {
  label: string;
  value: string;
  key: string;
}

interface IDropdown {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element | string;
  disabled?: boolean;
  variant: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
}

interface IPreview {
  image: File;
  onClose: () => void;
}

interface IUseImageUploadReturn {
  images: File[];
  handleImageUpload: (files: File[]) => void;
  handleImageDelete: (index: number) => void;
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}

interface IIMageUploader {
  images: File[];
  handleImageUpload: (files: File[]) => void;
  handleImageDelete: (index: number) => void;
  setNotification: (
    value: React.SetStateAction<INotification | undefined>,
  ) => void;
}

interface IDisplay {
  images: File[];
  handleImageDelete: (index: number) => void;
}

interface IUpload {
  images: File[];
  triggerFileInput: () => void;
}

interface IContent {
  triggerFileInput: () => void;
  images: File[];
}

interface IProductData {
  title: string;
  category: string;
  tags: string;
}

interface IFormState {
  isSubmitting: boolean;
  isValid: boolean;
}

interface IProductForm {
  data: IProductData;
  onChange: (data: Partial<IProductData>) => void;
}

interface INotification {
  type: 'success' | 'error';
  message: string;
  duration?: number;
  onClose?: () => void;
}

interface IHandleSubmit {
  e: React.FormEvent<Element>;
  productData: IProductData;
  setNotification: (
    value: React.SetStateAction<INotification | undefined>,
  ) => void;
  images: File[];
  setFormState: (value: React.SetStateAction<IFormState>) => void;
  setProductData: (value: React.SetStateAction<IProductData>) => void;
  setImages: (value: React.SetStateAction<File[]>) => void;
}

export type {
  ILabel,
  IInput,
  IButton,
  IUpload,
  IDisplay,
  IPreview,
  IContent,
  IDropdown,
  IFormState,
  IProductData,
  IHandleSubmit,
  IProductForm,
  INotification,
  IIMageUploader,
  IUseImageUploadReturn,
};
