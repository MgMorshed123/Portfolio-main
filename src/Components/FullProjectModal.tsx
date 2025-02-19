import {
  Badge,
  Button,
  Group,
  Image,
  Indicator,
  Modal,
  ScrollArea,
  Text,
  useMatches,
} from "@mantine/core";

const FullProjectModal = (props: any) => {
  const download = useMatches({ xs: "xs", md: "sm", lg: "md", bs: "lg" });
  const techno = useMatches({ xs: "md", sm: "md", md: "lg", bs: "xl" });
  const btn = useMatches({ xs: "xs", sm: "sm", md: "md", lg: "lg" });

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="auto"
      centered
      className="font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm webkit-backdrop-filter" />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor xs-mx:!p-2 !border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="!text-4xl sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl text-white flex gap-3 xs-mx:gap-1 items-center !font-bold"
          >
            {props.title}
            {props.live === true && (
              <Badge
                className="flex items-center gap-1"
                size={download}
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-end"
                    size={10}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] "
            src={props.image}
            alt={props.image}
          />
          <div className="flex flex-wrap gap-3 xs-mx:gap-2 my-3">
            {props.technologies.map((tech: string, index: number) => (
              <Badge key={index} size={techno} variant="light" color="#64FFDA">
                {tech}
              </Badge>
            ))}
          </div>

          <h1 className="text-white">
            {props?.credentials ? (
              <>
                Credentials For NormalUser. Email :{" "}
                {props?.credentials?.normalUser.email}, Passwod :{" "}
                {props?.credentials?.normalUser.password}
              </>
            ) : (
              ""
            )}
          </h1>
          <h1 className="text-white">
            Credentials For adminUser. Email :{" "}
            {props?.credentials?.adminUser.email}, Passwod :{" "}
            {props?.credentials?.adminUser.password}
          </h1>
 {   props?.credentials?.Doctor ? 
            <h1 className="text-white">
            Credentials For Doctor . Email :{" "}
            {props?.credentials?.Doctor.email}, Passwod :{" "}
            {props?.credentials?.Doctor.password}
          </h1>
   : ''

        }
          <Text
            className="!text-justify !text-lg sm-mx:!text-base xs-mx:!text-xs"
            c="dimmed"
          >
            {props.desc}
          </Text>
          <Group justify="space-between" mt="md" mb={3}>
            <a
              href={props.server}
              target="_blank"
              className="!w-[30%] sm-mx:!w-[30%]"
            >
              <Button
                variant="outline"
                size={btn}
                color="#64FFDA"
                fullWidth
                radius="md"
              >
                Backend Code
              </Button>
            </a>

            <a
              href={props.github}
              target="_blank"
              className="!w-[30%] sm-mx:!w-[30%]"
            >
              <Button
                variant="outline"
                size={btn}
                color="#64FFDA"
                fullWidth
                radius="md"
              >
                Client Code
              </Button>
            </a>
            <a href={props.link} target="_blank" className="!w-[30%] ">
              <Button
                size={btn}
                color="#64FFDA"
                className="!text-bgColor"
                fullWidth
                radius="md"
              >
                View Live App
              </Button>
            </a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModal;
