import React, { useState, useEffect } from "react";
import { Box, HStack, Text, Img, useDisclosure, Slide } from "@chakra-ui/react";
import Link from "next/link";
import { navRoutes } from "@/lib/data/navRoutes";
import HamburgerIcon from "./hamburgerIcon";

interface NavbarProps {
  linksColor?: string;
  navLogo?: string;
  lineColor?: string;
}

export default function Navbar({
  linksColor = "#FFFCF8",
  navLogo = "/re.png",
  lineColor = "#FFFFFF",
}: NavbarProps) {
  const { isOpen, onToggle } = useDisclosure();
  const [navbarShadow, setNavbarShadow] = useState("0px");
  const [navHeight, setNavHeight] = useState("100px");
  const [customBg, setCustomBg] = useState("transparent");
  const [offset, setOffset] = useState(0);
  const [customLinksColor, setCustomLinksColor] = useState("");
  const [customLineColor, setCustomLineColor] = useState(lineColor);
  const [customNavLogo, setCustomNavLogo] = useState("");

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (offset > 40) {
      setNavbarShadow("sm");
      setCustomBg("#fffcf8");
      setNavHeight("80px");
      setCustomLinksColor("brand.primary");
      setCustomNavLogo("/re.png");
      setCustomLineColor("#054738");
    } else {
      setNavbarShadow("0px");
      setNavHeight("100px");
      setCustomBg("transparent");
      setCustomLinksColor(linksColor);
      setCustomNavLogo(navLogo);
      setCustomLineColor(lineColor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    setCustomLinksColor(linksColor);
    setCustomNavLogo(navLogo);
  }, [linksColor, navLogo]);

  return (
    <Box
      width="100%"
      left="0px"
      position="fixed"
      zIndex={999}
      transition="all 0.3s ease-in-out"
      backgroundColor={customBg}
      boxShadow={navbarShadow}
    >
      <Box
        maxWidth="1520px"
        mx="auto"
        px={{ base: "1rem", lg: "4rem" }}
        height={{ base: "57px", lg: "72px" }}
      >
        <HStack justifyContent="space-between" height="100%">
          <Link href="/">
            <Img
            className="mt-6"
              src={
                customNavLogo}
              alt="Logo"
              width={{ base: "140px", lg: "180px" }}
            />
          </Link>

          <Box display={{ base: "block", lg: "none" }}>
            <HamburgerIcon
              lineColor={customLineColor}
              onToggle={onToggle}
              isNavOpen={isOpen}
            />
          </Box>

          <HStack spacing={0} display={{ base: "none", lg: "flex" }}>
            {navRoutes.map((item) => {
              return (
                <Link href={item.route} key={item.label}>
                  <Text
                    color={customLinksColor}
                    mx="16px"
                    _hover={{ borderBottom: "1px solid #FFFFFF" }}
                  >
                    {item.label}
                  </Text>
                </Link>
              );
            })}
          </HStack>
        </HStack>
      </Box>

      <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          bg="brand.primary"
          width="53%"
          height="100vh"
          position="absolute"
          top="0px"
          right="0px"
          padding="64px 0px 0px 24px"
        >
          <Text
            color="text.light"
            fontSize="10px"
            lineHeight="16px"
            letterSpacing="2px"
            margin="32px 0px 16px"
          >
            MENU
          </Text>

          {navRoutes.map((item) => {
            return (
              <Link href={item.route} key={item.label}>
                <Text
                  color="text.light"
                  fontSize="19.2px"
                  fontFamily="CabinetGroteskRegular"
                  lineHeight="30.72px"
                  padding="8px 0px"
                  marginRight="16px"
                >
                  {item.label}
                </Text>
              </Link>
            );
          })}

          <Box mt="16px">
            <Text
              color="text.light"
              fontSize="16px"
              lineHeight="25.6px"
              mb="8px"
              textDecor="underline"
            >
              123-456-7891
            </Text>
            <Text
              color="text.light"
              fontSize="16px"
              lineHeight="25.6px"
              textDecor="underline"
            >
              hello@nextmove.com
            </Text>
          </Box>

          <Img
            mt="32px"
            src="https://assets.website-files.com/645509c4920980630ccd4671/64550a737d0e0854ca092f2d_house-outline.svg"
            alt=""
            transform="translateX(80px)"
          />
        </Box>
      </Slide>
    </Box>
  );
}
