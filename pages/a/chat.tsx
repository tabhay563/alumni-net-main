import { doc, onSnapshot } from "firebase/firestore";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Navigation from "../../components/reusables/Navigation";
import Img from "../../components/reusables/Img";
import { auth, db } from "../../firebase";
import { Thread, ThreadID, postMessage, MessageInterface } from "../../firebase/chatFunctions";
import styles from "../../styles/PageStyles/Chat.module.scss";

interface MessageInput {
  message: string;
}

export default function Chat() {
  const [threadID, setThreadID] = useState<ThreadID>("xDBMQLtLa2D0JsoY9Dql");
  const [thread, setThread] = useState<Thread>();
  const [user, loading, error] = useAuthState(auth);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textBoxRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "chat_threads", threadID),
      (snapshot: any) => {
        const updatedThread = snapshot.data();
        setThread(updatedThread);
        scrollToBottom();
      },
      (error: any) => console.log(error)
    );
    return unsubscribe;
  }, [threadID]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MessageInput>();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const onSubmit = (data: MessageInput) => {
    if (user != null && data.message.length > 0) {
      console.log(data.message.length);
      postMessage(threadID, data.message, user);
      // textBoxRef.current.value = ''
    }
  };

  /// TODO: Add Text Remove and Date Pills
  /// TODO: Multiple Threads and Thread Select
  /// TODO: Thread Info
  /// TODO: Different timestamp Views
  /// TODO: Mobile Views and Stylings
  /// TODO: Images
  /// TODO: User Connect

  console.log(thread);

  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.main}>
        <div className={styles.info_cards}>
          <div className={styles.group_desc}>
            <div className={styles.image_wraper}>
              <div className={styles.image}>
                <img
                  src={"https://picsum.photos/seed/picsum/80/80"}
                  alt="Branch"
                  style={{
                    transform: "translate(50px,0)",
                  }}
                />
                <img
                  src={"https://picsum.photos/seed/lorem/80/80"}
                  alt="College"
                />
              </div>
            </div>

            <div className={styles.info}>
              <span className={styles.heading}>
                {"Artificial Inteligence and Robotics"}
              </span>
              <span className={styles.subheading}>{"Class of 2020"}</span>
            </div>
          </div>
          <div className={styles.available_chats_wraper}>
            <span className={styles.title}>{"Chat Threads"}</span>
            <div className={styles.available_chats}>
              {[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7].map((data, index) => {
                return (
                  <div className={styles.thread} key={index}>
                    <div className={styles.image_wraper}>
                      <img
                        src={"https://picsum.photos/seed/ssadm/80/80"}
                        alt="College"
                        className={styles.image}
                      />
                    </div>
                    <span className={styles.title}></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.chat_container}>
          <div className={styles.chat_wraper}>
            <div className={styles.chat_box}>
              {thread && user ? (
                thread.chat.map((data, index) => {
                  return data.uid != user.uid ? (
                    <ChatRecive data={data} key={index} />
                  ) : (
                    <ChatSent data={data} key={index} />
                  );
                })
              ) : (
                <h2>{"User Not Logged In"}</h2>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className={styles.textbar_wraper}>
              <form
                className={styles.textbar}
                id="textbar"
                onSubmit={handleSubmit(onSubmit)}
              >
                <textarea
                  className={styles.textbox}
                  form="textbar"
                  {...register("message")}
                ></textarea>
                <input
                  className={styles.send}
                  type="submit"
                  onClick={scrollToBottom}
                  ref={textBoxRef}
                />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ChatRecive({ data }: { data: MessageInterface }) {
  const time = new Date(data.timestamp);
  return (
    <div className={styles.chat_recive}>
      <div className={styles.profile_pic_wraper}>
        <Img
          src={data.profile_pic}
          alt="Profile Pic"
          className={styles.profile_pic}
        />
      </div>
      <div className={styles.message_wraper}>
        <div className={styles.message}>{data.message}</div>
        <span className={styles.timestamp}>
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}

function ChatSent({ data }: { data: MessageInterface }) {
  const time = new Date(data.timestamp);
  return (
    <div className={styles.chat_sent}>
      <div className={styles.message_wraper}>
        <div className={styles.message}>{data.message}</div>
        <span className={styles.timestamp}>
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className={styles.profile_pic_wraper}>
        <Img
          src={data.profile_pic}
          alt="Profile Pic"
          className={styles.profile_pic}
        />
      </div>
    </div>
  );
}
