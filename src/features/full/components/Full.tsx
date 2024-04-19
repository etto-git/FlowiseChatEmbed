import styles from '../../../assets/index.css';
import { Bot, BotProps } from '@/components/Bot';
import { BubbleParams } from '@/features/bubble/types';
import { createSignal, onCleanup, onMount, Show } from 'solid-js';

const defaultButtonColor = '#000000';
const defaultIconColor = 'black';

export type FullProps = BotProps & BubbleParams;

export const Full = (props: FullProps, { element }: { element: HTMLElement }) => {
  const [isBotDisplayed, setIsBotDisplayed] = createSignal(false);

  const launchBot = () => {
    setIsBotDisplayed(true);
  };

  const botLauncherObserver = new IntersectionObserver((intersections) => {
    if (intersections.some((intersection) => intersection.isIntersecting)) launchBot();
  });

  onMount(() => {
    botLauncherObserver.observe(element);
  });

  onCleanup(() => {
    botLauncherObserver.disconnect();
  });

  return (
    <>
      <style>{styles}</style>
      <Show when={isBotDisplayed()}>
        {/* <div part="ellipseContainerChat" class="ellipseContainerChat"> */}
          <div
            part="parent-bot"
            style={{
              'background-color': props.theme?.chatWindow?.backgroundColor || '#ffffff',
              // height: props.theme?.chatWindow?.height ? `${props.theme?.chatWindow?.height.toString()}vh` : '35vh',
              // width: props.theme?.chatWindow?.width ? `${props.theme?.chatWindow?.width.toString()}vw` : '40vw',
              margin: '0px',
            }}
          >
            <Bot
              badgeBackgroundColor={props.theme?.chatWindow?.backgroundColor}
              bubbleBackgroundColor={props.theme?.button?.backgroundColor ?? defaultButtonColor}
              bubbleTextColor={props.theme?.button?.iconColor ?? defaultIconColor}
              showTitle={props.theme?.chatWindow?.showTitle}
              title={props.theme?.chatWindow?.title}
              titleAvatarSrc={props.theme?.chatWindow?.titleAvatarSrc}
              welcomeMessage={props.theme?.chatWindow?.welcomeMessage}
              poweredByTextColor={props.theme?.chatWindow?.poweredByTextColor}
              textInput={props.theme?.chatWindow?.textInput}
              botMessage={props.theme?.chatWindow?.botMessage}
              userMessage={props.theme?.chatWindow?.userMessage}
              fontSize={props.theme?.chatWindow?.fontSize}
              chatflowid={props.chatflowid}
              chatflowConfig={props.chatflowConfig}
              apiHost={props.apiHost}
              isFullPage={true}
              observersConfig={props.observersConfig}
            />
          </div>
          {/* <div part="ellipse ellipse2" class="ellipse ellipse2" />
        </div> */}
      </Show>
    </>
  );
};
