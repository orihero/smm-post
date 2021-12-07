import React from "react";
import { NewPostModalsButton } from "../../../components/general/buttons/NewpostModalsButton.style";
import { COLORS } from "../../../constants/colors";
import { ExitModalIcon } from "../../../constants/icons";
import { IMAGES } from "../../../constants/images";
import {
  ButtonContainer,
  HaedPhoneImgParagraph,
  HandAndMassageContainer,
  HandAndMassageParagraph,
  HandAndMAssageParagraph,
  HandAndMassageParagraphSpan,
  HandPhoneImageBox,
  HeadPhoneContainer,
  HeadPhoneImgContainer,
  HeadPhoneImgDiv,
  HeadPhoneImgDivParagraph,
  HeadPhoneImgParagraphSpan,
  HeadSPhoneParagraphBox,
  LikeHandImgBox,
  LikeHandImgContainer,
  LikeHandImgParagraph,
  LikeHandImgParagraphBox,
  LikeHandImgParagraphSpan,
  ModalBackgrundHelp,
  ModalBoxHelp,
  ModalContainerHelp,
  ModalExitHelp,
  ParagraphsBoxHead,
  ParagraphsBoxHeadSpan,
  WorkforPostsContainer,
  WorkforPostsHead,
} from "./TurnOn.style";

function TurnOn({ closeModal }) {
  return (
    <>
      <ModalBackgrundHelp>
        <ModalContainerHelp>
          <ModalBoxHelp>
            Обсуждение постов Выключено
            <ModalExitHelp onClick={() => closeModal(false)}>
              <ExitModalIcon />
            </ModalExitHelp>
          </ModalBoxHelp>
          <WorkforPostsContainer>
            <WorkforPostsHead>
              Работайте над публикациями на всех этапах подготовки в одном
              <br /> приложении, вовлекайте коллег, экономьте время на рутине.
            </WorkforPostsHead>
          </WorkforPostsContainer>
          <HeadPhoneContainer>
            <HandPhoneImageBox src={IMAGES.turnon.handphoneimage} />
            <HeadSPhoneParagraphBox>
              <ParagraphsBoxHead>
                Работайте над публикациями в одном приложении
              </ParagraphsBoxHead>
              <ParagraphsBoxHeadSpan>
                Не нужно отдельно писать посты в Гугл Документах, обсуждать в
                <br /> Трелло или по почте, а планировать в сервисе для соцсетей
                — <br /> делайте всё в Амплифере.
              </ParagraphsBoxHeadSpan>
            </HeadSPhoneParagraphBox>
          </HeadPhoneContainer>
          <HandAndMassageContainer>
            <HandPhoneImageBox src={IMAGES.turnon.handandmassageimg} />
            <HeadSPhoneParagraphBox>
              <HandAndMassageParagraph>
                История обсуждений и правок
              </HandAndMassageParagraph>
              <HandAndMassageParagraphSpan>
                Храним в Амплифере все комментарии и доработки к публикациям
                <br /> — всегда можно посмотреть, кто и когда дорабатывал и
                обсуждал <br /> публикацию, утверждал в план.
              </HandAndMassageParagraphSpan>
            </HeadSPhoneParagraphBox>
          </HandAndMassageContainer>
          <HeadPhoneImgContainer>
            <HeadPhoneImgDiv src={IMAGES.turnon.headphoneimg} />
            <HeadPhoneImgDivParagraph>
              <HaedPhoneImgParagraph>
                Вовлекайте команду и клиента
              </HaedPhoneImgParagraph>
              <HeadPhoneImgParagraphSpan>
                Отслеживайте со всеми участниками проекта публикацию на всех
                <br /> этапах: от черновика и обсуждения до согласования и
                выпуска. И <br /> получают уведомления обо всех изменениях.
              </HeadPhoneImgParagraphSpan>
            </HeadPhoneImgDivParagraph>
          </HeadPhoneImgContainer>
          <LikeHandImgContainer>
            <LikeHandImgBox src={IMAGES.turnon.likehandimg} />
            <LikeHandImgParagraphBox>
              <LikeHandImgParagraph>Экономьте время</LikeHandImgParagraph>
              <LikeHandImgParagraphSpan>
                Выгадайте часы и минуты для действительно важных дел. <br />
                Сфокусируйтесь на реализации стратегии и экспериментах, а не на
                <br /> бесконечных переписках, правках и отвлечениях.
              </LikeHandImgParagraphSpan>
            </LikeHandImgParagraphBox>
          </LikeHandImgContainer>
          <ButtonContainer>
            <NewPostModalsButton
             onClick={() => closeModal(false)}
             style={{
               marginRight: 5
             }}
             >Закрыть</NewPostModalsButton>
            <NewPostModalsButton style={{ border: 'none',backgroundColor: COLORS.primaryPink, color: COLORS.white }}>Включить «Обсуждение постов» </NewPostModalsButton>
          </ButtonContainer>
        </ModalContainerHelp>
      </ModalBackgrundHelp>
    </>
  );
}

export default TurnOn;
