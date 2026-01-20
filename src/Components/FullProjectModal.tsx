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
  const download = useMatches({ xs: "xs", md: "sm", lg: "md" });
  const techno = useMatches({ xs: "sm", md: "md", lg: "lg" });
  const btn = useMatches({ xs: "xs", sm: "sm", md: "md" });

  return (
    <Modal
      opened={props.opened}
      onClose={props.close}
      centered
      size="lg"
      radius="xl"
      overlayProps={{
        blur: 4,
        opacity: 0.85,
      }}
      className="font-mono"
    >
      {/* 🔹 Sticky Header */}
      <Modal.Header className="sticky top-0 z-10 !bg-bgColor border-b border-primaryColor">
        <Modal.Title className="text-white text-2xl sm:text-xl font-bold flex items-center gap-2">
          {props.title}

          {props.live && (
            <Badge
              size={download}
              color="red"
              variant="outline"
              rightSection={<Indicator color="red" size={8} processing />}
            >
              Live
            </Badge>
          )}
        </Modal.Title>

        <Modal.CloseButton className="!text-red-500" />
      </Modal.Header>

      {/* 🔹 Scrollable Body */}
      <ScrollArea
        h="70vh"
        scrollbarSize={6}
        offsetScrollbars
        type="auto"
        className="px-2"
      >
        <Modal.Body className="!bg-bgColor space-y-4">
          <Image
            src={props.image}
            alt={props.title}
            radius="md"
            className="shadow-[0_0_8px_#64FFDA]"
          />

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {props.technologies.map((tech: string, index: number) => (
              <Badge key={index} size={techno} variant="light" color="#64FFDA">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Credentials */}
          {props.credentials && (
            <div className="text-white text-sm space-y-1">
              {props.credentials.normalUser && (
                <p>
                  <strong>User:</strong> {props.credentials.normalUser.email} /{" "}
                  {props.credentials.normalUser.password}
                </p>
              )}

              {props.credentials.adminUser && (
                <p>
                  <strong>Admin:</strong> {props.credentials.adminUser.email} /{" "}
                  {props.credentials.adminUser.password}
                </p>
              )}

              {props.credentials.Doctor && (
                <p>
                  <strong>Doctor:</strong> {props.credentials.Doctor.email} /{" "}
                  {props.credentials.Doctor.password}
                </p>
              )}
            </div>
          )}

          {/* Description */}
          <Text c="dimmed" className="text-justify text-base">
            {props.desc}
          </Text>

          {/* Buttons */}
          <Group grow mt="md">
            <Button
              component="a"
              href={props.server}
              target="_blank"
              variant="outline"
              color="#64FFDA"
              size={btn}
            >
              Backend Code
            </Button>

            <Button
              component="a"
              href={props.github}
              target="_blank"
              variant="outline"
              color="#64FFDA"
              size={btn}
            >
              Client Code
            </Button>

            <Button
              component="a"
              href={props.link}
              target="_blank"
              color="#64FFDA"
              className="!text-bgColor"
              size={btn}
            >
              View Live
            </Button>
          </Group>
        </Modal.Body>
      </ScrollArea>
    </Modal>
  );
};

export default FullProjectModal;
