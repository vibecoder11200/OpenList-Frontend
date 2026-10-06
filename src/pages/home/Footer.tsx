import { Anchor, HStack, VStack } from "@hope-ui/solid"
import { Link } from "@solidjs/router"
import { AnchorWithBase } from "~/components"
import { useT } from "~/hooks"
import { getSetting, me } from "~/store"
import { UserMethods } from "~/types"

export const Footer = () => {
  const t = useT()
  const poweredByVisible = getSetting("powered_by_visible") !== "false"
  const poweredByText =
    getSetting("powered_by_text") || t("home.footer.powered_by")
  return (
    <VStack class="footer" w="$full" py="$4">
      <HStack spacing="$1">
        {poweredByVisible && (
          <>
            <Anchor href="https://github.com/OpenListTeam/OpenList" external>
              {poweredByText}
            </Anchor>
            <span>|</span>
          </>
        )}
        <AnchorWithBase
          as={Link}
          href={UserMethods.is_guest(me()) ? "/@login" : "/@manage"}
        >
          {t(UserMethods.is_guest(me()) ? "login.login" : "home.footer.manage")}
        </AnchorWithBase>
      </HStack>
    </VStack>
  )
}
