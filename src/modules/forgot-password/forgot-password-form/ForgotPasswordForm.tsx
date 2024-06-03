import { forgotPasswordRequest } from '../../../services/auth-service';
import uaicImage from '../assets/uaic-image.jpg';
import { FPFContainer, FPFWrapper, FPFImage, FPFInnerContainer, FPFTitle, FPFForm, FPFInputWrapper, FPFLabel, FPFInput, FPFSubmitButton, FPFEmailSentTitle } from './styles';
import { useState } from 'react';

const ForgotPasswordForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await forgotPasswordRequest(email);
    setFormSubmitted(true);

    setIsLoading(false);
  };

  return (
    <FPFContainer>
      <FPFWrapper>
        <FPFImage src={uaicImage} alt="Universitatea Alexandru Ioan Cuza" />
        <FPFInnerContainer>
          {formSubmitted ? (
            <FPFEmailSentTitle>Email sent</FPFEmailSentTitle>
          ) : (
            <>
              <FPFTitle>Forgot Password</FPFTitle>
              <FPFForm onSubmit={handleSubmit}>
                <FPFInputWrapper>
                  <FPFLabel htmlFor="email">Enter your email</FPFLabel>
                  <FPFInput required type="email" id="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="example@email.com" />
                </FPFInputWrapper>
                <FPFSubmitButton type="submit">{isLoading ? 'Loading' : 'Send email'}</FPFSubmitButton>
              </FPFForm>
            </>
          )}
        </FPFInnerContainer>
      </FPFWrapper>
    </FPFContainer>
  );
};

export default ForgotPasswordForm;
