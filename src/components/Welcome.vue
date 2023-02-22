<template>
    <WelcomeItem>
        <template #icon>
            <DocumentationIcon/>
        </template>
        <template #heading>Documentation</template>                îles’s 
        <BaseLink href="https://iles-docs.netlify.app/"><span>documentation</span>
        </BaseLink>
        is in progress, but it should provide enough info to get started.
    </WelcomeItem>
    <WelcomeItem>
        <template #icon>
            <ToolingIcon/>
        </template>
        <template #heading>Tooling</template>
        This project is served and bundled with
        <BaseLink href="https://vitejs.dev/guide/features.html" target="_blank">Vite</BaseLink>                . The recommended IDE
        setup is 
        <BaseLink href="https://code.visualstudio.com/" target="_blank">VSCode</BaseLink>                 +
        <BaseLink href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</BaseLink>                .
    </WelcomeItem>
    <WelcomeItem>
        <template #icon>
            <CommunityIcon/>
        </template>
        <template #heading>Community</template>
        Got stuck? Ask your question on the
        <BaseLink target="_blank" href="https://discord.gg/xhheEDwUMX">#iles channel</BaseLink>                 of the Vite.js Discord
        server. Follow the
        <BaseLink target="_blank" href="https://twitter.com/ilesjs">@ilesjs</BaseLink>
        twitter account for latest news.
    </WelcomeItem>
</template>
