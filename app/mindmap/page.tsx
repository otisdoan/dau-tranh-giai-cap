"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import mindmap from "@/data/mindmap.json";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function MindmapPage() {
  const router = useRouter();
  const { initialNodes, initialEdges } = useMemo(() => {
    const center = mindmap.nodes.find((n) => n.id === "root");
    const topics = mindmap.nodes.filter((n) => n.id !== "root");
    const tooltips: Record<string, string | undefined> = mindmap.tooltips;
    const links: Record<string, string | undefined> = mindmap.links;

    const nodes = [];
    if (center) {
      nodes.push({
        id: center.id,
        data: {
          label: (
            <NodeCard
              title={center.label}
              tooltip={tooltips[center.id]}
              type="Chủ đề"
            />
          ),
        },
        position: { x: 0, y: 0 },
        type: "default",
        style: { width: 260 },
      });
    }

    topics.forEach((node, idx) => {
      const angle = (idx / topics.length) * Math.PI * 2;
      const radius = 320;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      nodes.push({
        id: node.id,
        data: {
          label: (
            <NodeCard
              title={node.label}
              tooltip={tooltips[node.id]}
              type={"Chủ đề"}
            />
          ),
          href: links[node.id],
        },
        position: { x, y },
        style: { width: 240 },
      });
    });

    const edges = mindmap.edges.map((e) => ({
      id: `${e.source}-${e.target}`,
      source: e.source,
      target: e.target,
      type: "smoothstep",
      animated: true,
      style: { stroke: "#c73727" },
    }));

    return { initialNodes: nodes, initialEdges: edges };
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = (_: unknown, node: { data?: { href?: string } }) => {
    const href = node?.data?.href;
    if (href) router.push(href);
  };

  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Sơ đồ tư duy" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Sơ đồ tư duy</h1>
          <p className="section-subtitle">
            Zoom/pan, hover node để xem tóm tắt, click để mở bài học.
          </p>
        </div>
        <Link href="/lesson/giai-cap" className="btn btn-secondary btn-sm">
          Trở về bài học
        </Link>
      </div>

      <div className="card" style={{ height: 540, minHeight: 380 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          panOnDrag
          zoomOnScroll
          zoomOnPinch
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
        >
          <Background gap={20} color="#e5eaf0" />
          <MiniMap pannable zoomable />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

function NodeCard({
  title,
  tooltip,
  type,
}: {
  title: string;
  tooltip?: string;
  type: string;
}) {
  return (
    <div style={{ padding: "10px 12px" }} title={tooltip}>
      <div className="pill">{type}</div>
      <h3 style={{ marginTop: 6 }}>{title}</h3>
      {tooltip && (
        <p className="muted" style={{ marginTop: 6 }}>
          {tooltip}
        </p>
      )}
    </div>
  );
}
